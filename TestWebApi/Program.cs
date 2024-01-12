// Code based on following article
//https://www.infoworld.com/article/3701888/how-to-use-api-keys-to-secure-web-apis-in-aspnet-core.html

using TestWebApi;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseAuthorization();

app.MapControllers();

// In this example you can use CustomApiKeyMiddleware OR CustomApiKeyAttribute
// to compare ApiKey in header with appsettings.json
//app.UseMiddleware<CustomApiKeyMiddleware>();

app.Run();
