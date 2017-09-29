using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace PathfinderTools.Models
{
    [DefaultValue(INDIFFERENT)]
  
    public enum Attitude
    {
        HOSTILE = -2,
        UNFRIENDLY = -1,
        INDIFFERENT = 0,
        FRIENDLY = 1,
        HELPFUL = 2
    }
}
