using System;
using System.Collections.Generic;

namespace server.BdTable
{
    public partial class Car
    {
        public Car()
        {
            Events = new HashSet<Event>();
            Specifications = new HashSet<Specification>();
            TechnicalInspections = new HashSet<TechnicalInspection>();
            Trips = new HashSet<Trip>();
        }

        public int IdCar { get; set; }
        public string NameCar { get; set; } = null!;
        public string NumberCar { get; set; } = null!;
        public int PriceCar { get; set; }
        public string BodyType { get; set; } = null!;
        public int CountSeats { get; set; }
        public string? ImgCar { get; set; }

        public virtual ICollection<Event> Events { get; set; }
        public virtual ICollection<Specification> Specifications { get; set; }
        public virtual ICollection<TechnicalInspection> TechnicalInspections { get; set; }
        public virtual ICollection<Trip> Trips { get; set; }
    }
}
