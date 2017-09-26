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

        public bool IsHidden { get; set; } = false;
        public int DcToFind { get; set; } = 0;

        // Navigation
        public int? FromRoomId { get; set; }
        public Room FromRoom { get; set; }

        public int? ToRoomId { get; set; }
        public Room ToRoom { get; set; }


    }
}
