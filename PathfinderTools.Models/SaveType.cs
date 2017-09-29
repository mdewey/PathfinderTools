using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace PathfinderTools.Models
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum SaveType
    {
        NONE = 0,
        FORT,
        REFLEX,
        WILL
    }
}
