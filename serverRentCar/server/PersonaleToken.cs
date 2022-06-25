using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server
{
    static class PersonaleToken
    {
       static string token;
        public static string GetToken()
        {
            return token;
        }
        public static void SetToken( string mytoken )
        {
            token = mytoken;
        }
    }
}
