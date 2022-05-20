using System;
using System.Collections.Generic;
using System.Linq;
using Server;
using System.Text;
using System.Threading.Tasks;

namespace server.BdTable
{
    internal class InfoHuman
    {
       
            public string FIO { get; set; }
            public DateTime DateOfBirth { get; set; }
            public Int64 NumberPhone { get; set; }
            public Int64 DrieverNumber { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
        
    }
    internal class Client
    {
        public string Login { get; set; }
        
        public string Password { set; get; }
    }
}
