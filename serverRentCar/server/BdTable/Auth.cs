using System;
using System.Collections.Generic;

namespace server.BdTable
{
    public partial class Auth
    {
        public int Id { get; set; }
        public string Login { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public int? IdClient { get; set; }

        public virtual Client? IdClientNavigation { get; set; }
    }
}
