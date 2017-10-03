using System;
using System.Collections.Generic;
using System.Text;

namespace PathfinderTools.Models
{
    public class Dungeon
    {
        //Properties
        public int Id { get; set; }
        public string Name { get; set; }


        //Navigation
        public int? StartingRoomId { get; set; }
        public Room StartingRoom { get; set; }


        public ICollection<Room> Rooms { get; set; } = new HashSet<Room>();
    }
}
