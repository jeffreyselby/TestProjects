using CustomCollection.Tests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsoleAppFramework
{
    internal class Program
    {
        static void Main(string[] args)
        {

            StringMap<Person> stringMap = new StringMap<Person>();

            stringMap.AddElement("Bob", new Person() { Name = "Bob Smith"});


            int count = stringMap.Count;

            Person person = stringMap.DefaultValue;

            
            person = stringMap.GetValue("Bob2");


            stringMap.RemoveElement("Bob");

            count = stringMap.Count;

            
        }
    }


    public class Person
    {
        public string Name { get; set; }

    }

}
