using System;
using System.Net;
using System.IO;
using System.Threading.Tasks;
using System.Net.Mail;
using System.Text;

namespace Server
{
    public class SMTPSender
    {
        MailAddress from;
        MailAddress to;
        MailMessage message;
        SmtpClient smtp;

        public SMTPSender()
        {


            // отправитель - устанавливаем адрес и отображаемое в письме имя
            from = new MailAddress("nikita19999lol@gmail.com", "Привет");
            // кому отправляем
           to = new MailAddress("starkaw.bin@gmail.com");
            // создаем объект сообщения
            message = new MailMessage(from, to);
            // тема письма
            message.Subject = "Тест";
            // текст письма
            message.Body = "<h2>Письмо-тест работы smtp-клиента</h2>";
            // письмо представляет код html
            message.IsBodyHtml = true;
            // адрес smtp-сервера и порт, с которого будем отправлять письмо
            smtp = new SmtpClient("smtp.gmail.com", 587);
            // логин и пароль
            smtp.Credentials = new NetworkCredential("nikita19999lol@gmail.com", "dqzqrtrwkjxqxvzp");
            smtp.EnableSsl = true;
            Console.Read();
        }

        public void SendUsual()
        {
            message.Subject = "Hello Danilka!";
            message.Body = "Zdraste from server's Nikitka!";
            Console.WriteLine("lllll");
            smtp.Send(message);
        }

        public void SendPDF()
        {
            message.Subject = "Олег";
            message.Body = "Првиет!";

            message.Attachments.Add(new Attachment("D:\\PAY.pdf"));

            smtp.Send(message);
        }

        public void SendHTML()
        {
            message.Subject = "HTML письмо";

            var mesText = new StringBuilder("Это опять я. Смотри, какая таблица получилась." + Environment.NewLine);
            mesText.Append("<table style=\"border-collapse: collapse\">" + Environment.NewLine);
            mesText.Append("<tr><th>Это</th><th>просто</th><th>интересная</th><th>таблица</th></tr>" + Environment.NewLine);
            mesText.Append("<tr><th>Мама,</th><th>я</th><th>в</th><th>отчете!</th></tr>" + Environment.NewLine);
            mesText.Append("</table>");

            message.Body = mesText.ToString();
            message.IsBodyHtml = true;

            smtp.Send(message);
        }
    }
}