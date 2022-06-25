using Nancy;
using Nancy.Hosting.Self;
using Nancy.ModelBinding;
using NancyNew;
using server;
using server.BdTable;

namespace Server
{
    class Program
    {
        static void Main()
        {
            var uri = new Uri("http://localhost:1234");

            HostConfiguration hostConfiguration = new();
            hostConfiguration.UrlReservations.CreateAutomatically = true;


            using (var host = new NancyHost(uri, new Bootstrapper(), hostConfiguration))
            {
                host.Start();

                Console.WriteLine("Your application is running on " + uri);
                Console.WriteLine("Press any [Enter] to close the host.");
                Console.ReadLine();

            }
        }
    }


    public class HomeModule : NancyModule
    {
        public string FIO;
        public HomeModule()
        {
            int idClient = 0;
            Post("/ClientAdd", (x) =>
            {
                x = this.Bind<ChildrenClient>();


                var res = new Response();

                using (work100013Context db = new())
                {
                    string pasID = x.Passport;
                    int idClient = 0;
                    Client client = new()
                    {
                        Name = x.Name,
                        LastName = x.LastName,
                        MiddleName = x.MiddleName,
                        DataOfBith = DateOnly.Parse(x.DataOfBith),
                        Number = x.Number,
                        Passport = x.Passport,
                        NumberDriver = x.NumberDriver,
                    };
                    db.Clients.Add(client);
                    db.SaveChanges();
                    string pas = x.Passport;
                    var list = db.Clients.Where(p => p.Passport == pas);
                    foreach (var u in list)
                    {
                        idClient = u.IdClient;
                    };
                    Wallet wallet = new Wallet
                    {
                        Sum = 0,
                        IdClient = idClient
                    };
                    db.Wallets.Add(wallet);
                    db.SaveChanges();
                    var list1 = db.Clients.Where(p => p.Passport == pas);
                    foreach (var u in list)
                    {
                        idClient = u.IdClient;
                    }
                    Auth auth = new Auth
                    {
                        Login = x.Number,
                        Email = x.Email,
                        Password = x.Password,
                        IdClient = idClient

                    };
                    db.Auths.Add(auth);
                    db.SaveChanges();
                }

                res.StatusCode = (HttpStatusCode)200;
                res.Headers["Access-Control-Allow-Origin"] = "*";
                res.Headers["Access-Control-Allow-Method"] = "POST";
                res.Headers["Access-Control-Expose-Headers"] = "Human";
                res.Headers["Content-Type"] = "application/json";
                return res;
            });
            Post("/exect", (x) =>
            {
                x = this.Bind<Auth>();
                //TODO: Add JWT
                string login = x.Login;
                string password = x.Password;
                int x1 = 0;
                using (work100013Context db = new())
                {
                    var acc1 = db.Auths.Where(l => l.Login == login && l.Password == password);
                    foreach (var u in acc1)
                    {
                        idClient = Int32.Parse(u.IdClient.ToString());
                        if (acc1 != null)
                        {
                            x1++;
                        }
                    }
                }

                Response response = new();

                if (x1 != 0)
                {

                    response.StatusCode = HttpStatusCode.OK;
                    response.Headers["Access-Control-Allow-Origin"] = "*";
                    response.Headers["Access-Control-Allow-Method"] = "POST";
                    PersonaleToken.SetToken(idClient + "." + Convert.ToBase64String(Guid.NewGuid().ToByteArray()));
                    response.Headers["Token"] = PersonaleToken.GetToken();
                    response.Headers["Access-Control-Expose-Headers"] = "Token";
                    response.Headers["Content-Type"] = "application/json";

                    response.Headers["Account"] = System.Text.Json.JsonSerializer.Serialize(x);
                    return response;
                }
                else
                {
                    response.StatusCode = HttpStatusCode.NotFound;
                    return response;
                }
            });
            Post("/addWallet", (x) =>
            {
                Response response = new();
                string token_headers = Request.Headers["Token"].FirstOrDefault();
                string idClient = Request.Headers["IdClient"].FirstOrDefault();
                if (token_headers == PersonaleToken.GetToken().Split('.')[1])
                {
                    x = this.Bind<AddSumWallet>();
                    int sum = (int)x.Sum;
                    string email = "";
                    using (work100013Context db = new())
                    {
                        int IdWallet = 0;
                        var client = from Auth in db.Auths
                                     where Auth.IdClient == Int32.Parse(idClient)
                                     select new
                                     {
                                         Email = Auth.Email
                                     };
                        foreach (var cl in client)
                        {
                            email = cl.Email.ToString();
                        }
                        SMTPSender s = new SMTPSender(email);
                        s.SendUsual(sum);
                        var list = db.Wallets.Where(p => p.IdClient == Int32.Parse(idClient));
                        foreach (var wallet in list)
                        {
                            IdWallet = wallet.IdWallet;
                        }
                        HistoryWallet historyWallet = new HistoryWallet
                        {
                            DateOperation = DateOnly.FromDateTime(DateTime.Now),
                            TimeOperation = DateTimeOffset.Now,
                            Sum = x.Sum,
                            IdWallet = IdWallet
                        };
                        db.HistoryWallets.Add(historyWallet);
                        db.SaveChanges();
                        var list1 = from Wallet in db.Wallets
                                    where Wallet.IdClient == Int32.Parse(idClient)
                                    select new
                                    {
                                        Sum = Wallet.Sum,
                                    };
                        response.StatusCode = HttpStatusCode.OK;
                        response.Headers["Access-Control-Allow-Origin"] = "*";
                        response.Headers["Access-Control-Allow-Method"] = "POST";
                        response.Headers["Content-Type"] = "application/json";
                        response.Headers["Account"] = System.Text.Json.JsonSerializer.Serialize(list1);
                        response.Headers["Access-Control-Expose-Headers"] = "Account";
                    }
                }
                return response;
            });
            Get("/client", (x21) =>
                {
                    Response response = new();
                    string token_headers = Request.Headers["Token"].FirstOrDefault();
                    string idClient = Request.Headers["IdClient"].FirstOrDefault();
                    if (token_headers == PersonaleToken.GetToken().Split('.')[1])
                    {

                        using (work100013Context db = new())
                        {

                            var list = from Client in db.Clients
                                       join Auth in db.Auths on Client.IdClient equals Auth.IdClient
                                       where Client.IdClient == Int32.Parse(idClient)
                                       select new
                                       {
                                           LastName = Client.LastName,
                                           Name = Client.Name,
                                           MiddleName = Client.MiddleName,
                                           DriverNum = Client.NumberDriver,
                                           Email = Auth.Email,
                                       };
                            response.StatusCode = HttpStatusCode.OK;
                            response.Headers["Access-Control-Allow-Origin"] = "*";
                            response.Headers["Access-Control-Allow-Method"] = "Get";
                            response.Headers["Client"] = System.Text.Json.JsonSerializer.Serialize(list);
                            response.Headers["Access-Control-Expose-Headers"] = "Client";
                        }

                    }
                    return response;


                });
            Get("/cars", (x21) =>
            {
                Response response = new();
                using (work100013Context db = new())
                {
                    try
                    {
                        var cars = from Car in db.Cars
                                   join Specification in db.Specifications on Car.IdCar equals Specification.IdCar
                                   orderby Car.IdCar
                                   select new
                                   {
                                       IdCar = Car.IdCar,
                                       NameCar = Car.NameCar,
                                       PriceCar = Car.PriceCar,
                                       BodyType = Car.BodyType,
                                       CountSeats = Car.CountSeats,
                                       Transmission = Specification.Transmission,
                                       ImgCar = Car.ImgCar,
                                       Horsepower = Specification.Horsepower,
                                       Engine = Specification.Engine,
                                   };
                        response.StatusCode = HttpStatusCode.OK;
                        response.Headers["Access-Control-Allow-Origin"] = "*";
                        response.Headers["Access-Control-Allow-Method"] = "Get";
                        response.Headers["Cars"] = System.Text.Json.JsonSerializer.Serialize(cars);
                        response.Headers["Access-Control-Expose-Headers"] = "Cars";

                        return response;
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                        return HttpStatusCode.NoResponse;
                    }

                }


            });
            Get("/TO", (ew) =>
            {
                Response response = new();
                using (work100013Context db = new())
                {
                    try
                    {
                        var to = from TechnicalInspection in db.TechnicalInspections
                                 select new
                                 {
                                     IdInspection = TechnicalInspection.IdInspection,
                                     DateOfPassage = Convert.ToString(TechnicalInspection.DateOfPassage),
                                     Description = TechnicalInspection.Description.ToString(),
                                     IdCar = TechnicalInspection.IdCar,
                                 };

                        response.StatusCode = HttpStatusCode.OK;
                        response.Headers["Access-Control-Allow-Origin"] = "*";
                        response.Headers["Access-Control-Allow-Method"] = "Get";
                        response.Headers["Tech"] = System.Text.Json.JsonSerializer.Serialize(to);
                        response.Headers["Access-Control-Expose-Headers"] = "Tech";
                        return response;
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                        return HttpStatusCode.NoResponse;
                    }
                }


            });
            Get("/TripInfoClient", (ew) =>
            {
                Response response = new();
                string token_headers = Request.Headers["Token"].FirstOrDefault();
                string idClient = Request.Headers["IdClient"].FirstOrDefault();
                if (token_headers == PersonaleToken.GetToken().Split('.')[1])
                {
                    using (work100013Context db = new())
                    {
                        try
                        {
                            var to = from Trip in db.Trips
                                     join Car in db.Cars on Trip.IdCar equals Car.IdCar
                                     join Client in db.Clients on Trip.IdClient equals Client.IdClient
                                     where Client.IdClient == Int32.Parse(idClient)
                                     orderby Trip.StartDate 
                                     select new
                                     {
                                         IdTrip = Trip.IdTrip,
                                         StartDate = Convert.ToString(Trip.StartDate),
                                         EndDate = Convert.ToString(Trip.EndDate),
                                         NameCar = Car.NameCar,
                                         NumberCar = Car.NumberCar,
                                     };

                            response.StatusCode = HttpStatusCode.OK;
                            response.Headers["Access-Control-Allow-Origin"] = "*";
                            response.Headers["Access-Control-Allow-Method"] = "Get";
                            response.Headers["Info"] = System.Text.Json.JsonSerializer.Serialize(to);
                            response.Headers["Access-Control-Expose-Headers"] = "Info";
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine(ex.Message);
                            return HttpStatusCode.NoResponse;
                        }
                    }
                }
                return response;
            });

            Get("/Balance", (ew) =>
            {
                Response response = new();
                string token_headers = Request.Headers["Token"].FirstOrDefault();
                string idClient = Request.Headers["IdClient"].FirstOrDefault();
                if (token_headers == PersonaleToken.GetToken().Split('.')[1])
                {
                    using (work100013Context db = new())
                    {
                        try
                        {
                            var balance = from Wallet in db.Wallets
                                          where Wallet.IdClient == Int32.Parse(idClient)
                                          select new
                                          {
                                              Sum = Wallet.Sum
                                          };

                            response.StatusCode = HttpStatusCode.OK;
                            response.Headers["Access-Control-Allow-Origin"] = "*";
                            response.Headers["Access-Control-Allow-Method"] = "Get";
                            response.Headers["Balance"] = System.Text.Json.JsonSerializer.Serialize(balance);
                            response.Headers["Access-Control-Expose-Headers"] = "Balance";
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine(ex.Message);
                            return HttpStatusCode.NoResponse;
                        }
                    }
                }
                return response;
            });
            Post("/Trip", (x) => //добавить отпрвку чека
            {
                Response response = new();
                x = this.Bind<IdTrip>();
                using (work100013Context db = new())
                {
                    try
                    {
                        int idCar = x.IdCar;
                        var list = from Trip in db.Trips
                                   where Trip.IdCar == idCar
                                   select new
                                   {
                                       StartDate = Convert.ToString(Trip.StartDate),
                                       EndDate = Convert.ToString(Trip.EndDate),

                                   };


                        response.StatusCode = HttpStatusCode.OK;
                        response.Headers["Access-Control-Allow-Origin"] = "*";
                        response.Headers["Access-Control-Allow-Method"] = "POST";
                        string myToken = "lalala.somestring.secretword";
                        response.Headers["Token"] = myToken;
                        response.Headers["Access-Control-Expose-Headers"] = "Token, Account";
                        response.Headers["Content-Type"] = "application/json";
                        response.Headers["Trip"] = System.Text.Json.JsonSerializer.Serialize(list);
                        response.Headers["Access-Control-Expose-Headers"] = "Trip";
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                    }
                    return response;
                }

            });
            Post("/addTrip", (x) =>
            {
                Response response = new();
                string token_headers = Request.Headers["Token"].FirstOrDefault();
                string idClient = Request.Headers["IdClient"].FirstOrDefault();
                if (token_headers == PersonaleToken.GetToken().Split('.')[1])
                {
                    x = this.Bind<NewTrip>();
                    using (work100013Context db = new())
                    {

                        Trip trip = new Trip
                        {
                            StartDate = DateOnly.Parse(x.StartDate),
                            EndDate = DateOnly.Parse(x.EndDate),
                            IdCar = x.IdCar,
                            IdClient = Int32.Parse(idClient),
                            StatusTrip = true,
                            StatusCar = false
                        };
                        db.Trips.Add(trip);
                        db.SaveChanges();

                        response.StatusCode = HttpStatusCode.OK;
                        response.Headers["Access-Control-Allow-Origin"] = "*";
                        response.Headers["Access-Control-Allow-Method"] = "POST";
                        string myToken = "lalala.somestring.secretword";
                        response.Headers["Token"] = myToken;
                        response.Headers["Access-Control-Expose-Headers"] = "Token, Account";
                        response.Headers["Content-Type"] = "application/json";
                    }
                }
                return response;
            });
        }
    }
}