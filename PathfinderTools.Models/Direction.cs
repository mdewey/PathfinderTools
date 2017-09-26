using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace PathfinderTools.Models
{
    [DefaultValue(NONE)]
    [JsonConverter(typeof(StringEnumConverter))]
    public enum Direction
    {
        NONE =0,
        NORTH,
        EAST,
        SOUTH,
        WEST,
        ABOVE,
        BELOW
    }
}
