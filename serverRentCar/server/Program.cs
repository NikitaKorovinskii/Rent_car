using Nancy;
using Nancy.Hosting.Self;
using Nancy.ModelBinding;
using NancyNew;
using server.BdTable;
using Server;

class Program
{
    static void Main(string[] args)
    {
        var uri = new Uri("http://localhost:1234");

        HostConfiguration hostConfiguration = new HostConfiguration();
        hostConfiguration.UrlReservations.CreateAutomatically = true;


        using (var host = new NancyHost(uri, new Bootstrapper(), hostConfiguration))
        {
            host.Start();

            Console.WriteLine("Your application is running on " + uri);
            Console.WriteLine("Press any [Enter] to close the host.");
            Console.ReadLine();
            SMTPSender n = new SMTPSender();
            n.SendUsual();
          
        }
    }
}


public class HomeModule : NancyModule
{
    public string FIO;
    public HomeModule()
    {
        Client human = new Client();
        human = new() { Login = "Anthony" };
        Get("/", args => "Олег лучший парень на деревне");
        Get("/SayHello", args => $"Hello {this.Request.Query["name"]}");
        Get("/SayHello2/{name}", args => $"Hello {args.name}");
        Get("/Human", args => $"{human.Login}");
        Post("/humanity", (x) =>
        {
            x = this.Bind<Client>();

            var res = new Response();

            res.StatusCode = (HttpStatusCode)200;
            res.Headers["Access-Control-Allow-Origin"] = "*";
            res.Headers["Access-Control-Allow-Method"] = "POST";
            res.Headers["Access-Control-Expose-Headers"] = "Human";
            res.Headers["Content-Type"] = "application/json";
            res.Headers["Human"] = System.Text.Json.JsonSerializer.Serialize(human);
            Console.WriteLine(x.Login);

            Console.WriteLine(x.Password);
            return res;
        });
        Post("/authorization", (x) =>
        {
            InfoHuman infoHuman = new InfoHuman();
            x = this.Bind<InfoHuman>();

            var res = new Response();

            res.StatusCode = (HttpStatusCode)200;
            res.Headers["Access-Control-Allow-Origin"] = "*";
            res.Headers["Access-Control-Allow-Method"] = "POST";
            res.Headers["Access-Control-Expose-Headers"] = "Human";
            res.Headers["Content-Type"] = "application/json";
            res.Headers["Human"] = System.Text.Json.JsonSerializer.Serialize(human);
            Console.WriteLine(x.FIO+" "+x.DateOfBirth+" "+x.NumberPhone + " " + x.DrieverNumber + " " + x.Password);
            //fio уже нет
            return res;
        });
    }
}