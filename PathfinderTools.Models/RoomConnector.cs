using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PathfinderTools.Models
{
    public class RoomConnector
    {
        public int Id { get; set; }

        public Direction Direction { get; set; }
        
        // Navigation
        public int FromRoomId { get; set; }
        public Room FromRoom { get; set; }

        public int ToRoomId { get; set; }
        public Room ToRoom { get; set; }


    }
}
