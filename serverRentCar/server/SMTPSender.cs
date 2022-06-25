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

        public SMTPSender(string email)
        {


            // отправитель - устанавливаем адрес и отображаемое в письме имя
            from = new MailAddress("nikita19999lol@gmail.com", "Операция на CoinCar");
            // кому отправляем
            to = new MailAddress(email);
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
        }

        public void SendUsual( int x)
        {
            if (x > 0)
            {
                message.Subject = "Чек от CoinCar";
                var mesText = new StringBuilder("Чек о об операции на CoinCar" + Environment.NewLine);
                mesText.Append("<p>***********************</p>" + Environment.NewLine +
                    "<p><strong>  CoinCar </strong></p><p> Добро пожаловать </p>" + Environment.NewLine +
                    "<p> ККМ 00075411 &nbsp; &nbsp; &nbsp; &nbsp; #3969</p>" + Environment.NewLine +
                    "<p> ИНН 1087746942040 </p><p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ЭКЛЗ 3851495566 </p>" + Environment.NewLine +
                    $"<p> {DateOnly.FromDateTime(DateTime.Now)} {TimeOnly.FromDateTime(DateTime.Now)} СИС.</p><p> &nbsp; АДМИ </p>" + Environment.NewLine +
                    "<p> Пополнение баланса </p>" + Environment.NewLine +
                    $"<p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; = {x} ₽ </p>" + Environment.NewLine +
                    $"<p> &nbsp;<strong> ИТОГ = {x} ₽</strong></p><p> ***********************</p>" + Environment.NewLine +
                    "<p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p> " + Environment.NewLine);
                message.Body = mesText.ToString();
                message.IsBodyHtml = true;

                smtp.Send(message);
            }
            else
            {
                message.Subject = "Чек от CoinCar";
                var mesText = new StringBuilder("Чек о об операции на CoinCar" + Environment.NewLine);
                mesText.Append("<p>***********************</p>" + Environment.NewLine +
                    "<p><strong>  CoinCar </strong></p><p> Добро пожаловать </p>" + Environment.NewLine +
                    "<p> ККМ 00075411 &nbsp; &nbsp; &nbsp; &nbsp; #3969</p>" + Environment.NewLine +
                    "<p> ИНН 1087746942040 </p><p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ЭКЛЗ 3851495566 </p>" + Environment.NewLine +
                    $"<p> {DateOnly.FromDateTime(DateTime.Now)} {TimeOnly.FromDateTime(DateTime.Now)} СИС.</p><p> &nbsp; АДМИ </p>" + Environment.NewLine +
                    "<p> Списание </p>" + Environment.NewLine +
                    $"<p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; = {x} ₽ </p>" + Environment.NewLine +
                    $"<p> &nbsp;<strong> ИТОГ = {x} ₽</strong></p><p> ***********************</p>" + Environment.NewLine +
                    "<p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p> " + Environment.NewLine);
                message.Body = mesText.ToString();
                message.IsBodyHtml = true;

                smtp.Send(message);
            }
            
        }
    }
}