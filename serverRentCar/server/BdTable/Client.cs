using System;
using System.Collections.Generic;

namespace server.BdTable
{
    public partial class Client
    {
        public Client()
        {
            Auths = new HashSet<Auth>();
            Trips = new HashSet<Trip>();
            Wallets = new HashSet<Wallet>();
        }

        public int IdClient { get; set; }
        public string Name { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string MiddleName { get; set; } = null!;
        public string NumberDriver { get; set; } = null!;
        public string Passport { get; set; } = null!;
        public string Number { get; set; } = null!;
        public DateOnly DataOfBith { get; set; }

        public virtual ICollection<Auth> Auths { get; set; }
        public virtual ICollection<Trip> Trips { get; set; }
        public virtual ICollection<Wallet> Wallets { get; set; }
    }
}
