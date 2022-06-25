using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.BdTable
{
    public class ChildrenClient
    {
        public int IdClient { get; set; }
        public string Name { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string MiddleName { get; set; } = null!;
        public string NumberDriver { get; set; } = null!;
        public string Passport { get; set; } = null!;
        public string Number { get; set; } = null!;
        public string? DataOfBith { get; set; }

        public string? Email { get; set; }
        public string? Password { get; set; }

    }
}
