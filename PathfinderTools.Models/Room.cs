using System;
using System.Collections.Generic;
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
        [InverseProperty(nameof(RoomConnector.ToRoom))]
        public ICollection<RoomConnector> ToRooms { get; set; }

        [InverseProperty(nameof(RoomConnector.FromRoom))]
        public ICollection<RoomConnector> FromRooms { get; set; }

        [NotMapped]
        public ICollection<RoomConnector> AllRooms
        {
            get
            {
                var rv = new List<RoomConnector>();
                rv.AddRange(this.ToRooms);
                rv.AddRange(this.FromRooms);
                return rv;
            }
        }


    }
}
