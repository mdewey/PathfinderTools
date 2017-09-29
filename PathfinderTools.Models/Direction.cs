using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel;

namespace PathfinderTools.Models
{
    [DefaultValue(NONE)]
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
