using System;
using System.Collections.Generic;
using System.Text;

namespace PathfinderTools.Models
{
    public class Creature
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int HitPoints { get; set; }
        public string Tatics { get; set; }
        public string Morale { get; set; }
        public string SpecialAbilities { get; set; }
        public int ChallengeRating { get; set; }
        public string D20PfsrdUrl { get; set; }
        public string Weaknesses { get; set; }
        public string Statistics { get; set; }

        public int RoomId { get; set; }
        public Room Room { get; set; }
    }
}
