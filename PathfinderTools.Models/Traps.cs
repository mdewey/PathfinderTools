using System;
using System.Collections.Generic;
using System.Text;

namespace PathfinderTools.Models
{
    public class Traps
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Trigger { get; set; }
        public int DcToBeat { get; set; }
        public SaveType SaveType { get; set; }
        public int PerceptionDcToSpot { get; set; }


        // Navigation
        public int RoomId { get; set; }
        public  virtual Room Room { get; set; }

    }
}
