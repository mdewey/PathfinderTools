using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace PathfinderTools.Models
{
    public class Room
    {
        // Properties
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }


        // Navigations
        public int DungeonId { get; set; }
        

        public ICollection<Traps> Traps { get; set; } = new HashSet<Traps>();
        public ICollection<Creature> Creatures { get; set; } = new HashSet<Creature>();

        [DisplayName("PreviousRooms")]
        [InverseProperty(nameof(RoomConnector.ToRoom))]
        public ICollection<RoomConnector> ComesFrom { get; set; } = new HashSet<RoomConnector>();


        [DisplayName("NextRooms")]
        [InverseProperty(nameof(RoomConnector.FromRoom))]
        public ICollection<RoomConnector> GoesToo { get; set; } = new HashSet<RoomConnector>();

        [NotMapped]
        public ICollection<RoomConnector> AllRooms
        {
            get
            {
                var rv = new List<RoomConnector>();
                rv.AddRange(this.ComesFrom);
                rv.AddRange(this.GoesToo);
                return rv;
            }
        }


    }
}
