using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PathfinderTools.Data;
using PathfinderTools.Models;

namespace PathfinderTools.Controllers
{
    [Produces("application/json")]
    [Route("api/Dungeons")]
    public class DungeonsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public DungeonsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Dungeons
        [HttpGet]
        public IEnumerable<Dungeon> GetDungeons()
        {
            return _context.Dungeons;
        }

        // GET: api/Dungeons/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDungeon([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dungeon = await _context.Dungeons.SingleOrDefaultAsync(m => m.Id == id);

            if (dungeon == null)
            {
                return NotFound();
            }

            return Ok(dungeon);
        }


        [HttpGet("{id}/rooms")]
        public async Task<IActionResult> GetDungeonsRooms([FromRoute] int id)
        {
            var rooms = await _context.Rooms.Where(m => m.DungeonId == id).ToListAsync();
            
            return Ok(rooms);
        }

        // PUT: api/Dungeons/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDungeon([FromRoute] int id, [FromBody][Bind("Id,Name")] Dungeon dungeon)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != dungeon.Id)
            {
                return BadRequest();
            }
            _context.Dungeons.Attach(dungeon);
            _context.Entry(dungeon).Property(p => p.Name).IsModified = true;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DungeonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }

        // POST: api/Dungeons
        [HttpPost]
        public async Task<IActionResult> PostDungeon([FromBody] Dungeon dungeon)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Dungeons.Add(dungeon);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDungeon", new { id = dungeon.Id }, dungeon);
        }

        // DELETE: api/Dungeons/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDungeon([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dungeon = await _context.Dungeons.SingleOrDefaultAsync(m => m.Id == id);
            if (dungeon == null)
            {
                return NotFound();
            }

            _context.Dungeons.Remove(dungeon);
            await _context.SaveChangesAsync();

            return Ok(dungeon);
        }

        private bool DungeonExists(int id)
        {
            return _context.Dungeons.Any(e => e.Id == id);
        }
    }
}