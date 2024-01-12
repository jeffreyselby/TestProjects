using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace TestWebApi
{
    public class CustomApiKeyAttribute : Attribute, IAsyncActionFilter
    {

        private const string API_KEY = "ApiKey";

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            bool success = context.HttpContext.Request.Headers.TryGetValue(API_KEY, out var apiKeyFromHttpHeader);

            if (!success)
            {
                context.Result = new ContentResult()
                {
                    StatusCode = 401,
                    Content = "The Api Key for accessing this endpoint is not available"
                };
                return;
            }

            IConfigurationBuilder configurationBuilder = new ConfigurationBuilder();
            configurationBuilder.AddJsonFile("AppSettings.json");
            IConfiguration configuration = configurationBuilder.Build();
            string apiKeyFromConfiguration = configuration[API_KEY] ?? "";

            if (!apiKeyFromConfiguration.Equals(apiKeyFromHttpHeader))
            {
                context.Result = new ContentResult()
                {
                    StatusCode = 401,
                    Content = "The Api key is incorrect : Unauthorized access"
                };
                return;
            }
            await next();
        }
    }
}
