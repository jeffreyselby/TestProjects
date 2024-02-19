using RabbitMQ.Client;
using System.Text;

var factory = new ConnectionFactory { HostName = "localhost" };

using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

channel.QueueDeclare(queue: "letterbox",
    durable: false,
    exclusive: false,
    autoDelete: false,
    arguments: null);

var message = "This is my first Message";

var encodedMessage = Encoding.UTF8.GetBytes(message);

channel.BasicPublish("", "letterbox", null, encodedMessage); ;

Console.WriteLine($"Published message: {message}");   




//// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Producer: Hello, World!");

//ConsoleKeyInfo keyInfo = Console.ReadKey();
//keyInfo.Key.ToString();
