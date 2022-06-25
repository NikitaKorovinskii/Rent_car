using System;
using System.Collections.Generic;

namespace server.BdTable
{
    public partial class TechnicalInspection
    {
        public int IdInspection { get; set; }
        public DateOnly DateOfPassage { get; set; }
        public int Sum { get; set; }
        public string Description { get; set; } = null!;
        public int IdCar { get; set; }

        public virtual Car IdCarNavigation { get; set; } = null!;
    }
}
