using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PathfinderTools.Models;

namespace PathfinderTools.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {

        public DbSet<Room> Rooms { get; set; }
        public DbSet<RoomConnector> RoomConnector { get; set; }
        public DbSet<Dungeon> Dungeons { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<RoomConnector>(b =>
            {
                b
                .HasOne(h => h.FromRoom)
                .WithMany(m => m.GoesToo)
                .OnDelete(DeleteBehavior.Restrict);
                b
                .HasOne(h => h.ToRoom)
                .WithMany(m => m.ComesFrom)
                .OnDelete(DeleteBehavior.Restrict);

            });


        }
    }
}
