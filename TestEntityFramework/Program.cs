// See https://aka.ms/new-console-template for more information
using TestEntityFramework;
using TestEntityFramework.Models;

Console.WriteLine("Hello, World!");


using (var context = new BloggingContext())
{

    context.Database.EnsureCreated();

    var blogs = new List<Blog>()
    {
        new Blog
        {            
            Url = "www.hello.com"
        }
    };

    context.Blogs.AddRange(blogs);

    context.SaveChanges();




}

