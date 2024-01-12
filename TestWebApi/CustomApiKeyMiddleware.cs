namespace TestWebApi
{
    public class CustomApiKeyMiddleware
    {
        private readonly IConfiguration _configuration;
        private readonly RequestDelegate _next;
        const string API_KEY = "ApiKey";
        public CustomApiKeyMiddleware(RequestDelegate next, IConfiguration configuration)
        {
            _next = next;
            _configuration = configuration;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            bool success = httpContext.Request.Headers.TryGetValue(API_KEY, out var apiKeyFromHttpHeader);

            if (!success)
            {
                httpContext.Response.StatusCode = 401;
                await httpContext.Response.WriteAsync("The API Key for accessing this endpoint is not available.");
                return;
            }

            string apiKeyFromConfiguration = _configuration[API_KEY] ?? "";

            if (!apiKeyFromConfiguration.Equals(apiKeyFromHttpHeader))
            {
                httpContext.Response.StatusCode = 401;
                await httpContext.Response.WriteAsync("The authentication key is incorrect : Unauthorized access");
                return;
            }
            await _next(httpContext);
        }
    }
}
