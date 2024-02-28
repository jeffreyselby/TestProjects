using System;
using System.Collections;
using System.Linq;
using System.Collections.Generic;
using System.Diagnostics;
using CustomCollection.Tests;

// you can also use other imports, for example:
// using System.Collections.Generic;

// you can write to stdout for debugging purposes, e.g.
// Console.WriteLine("this is a debug message");


StringMap<Person> stringMap = new StringMap<Person>();

stringMap.AddElement("Bob", new Person() { Name = "Bob Smith" });


int count = stringMap.Count;

Person person = stringMap.DefaultValue;


person = stringMap.GetValue("Bob2");


stringMap.RemoveElement("Bob");

count = stringMap.Count;


public class Person
{
    public string Name { get; set; }

}





//var solution = new Solution();

//int value = solution.solution(new int[] { -1, -2, -3, 1, 2, 3, 4, 6 });

//Console.WriteLine(value);


//class Solution
//{
//    public int solution(int[] A)
//    {
//        int value = 1;

//        if (A != null && A.Length > 0)
//        {
//            int previousInteger = 0;
//            int[] orderedIntegers = A.Order().ToArray();

//            for (int i = 0; i < orderedIntegers.Length; i++)
//            {
//                if (orderedIntegers[i] > 0)
//                {
//                    if (orderedIntegers[i] > previousInteger + 1)
//                    {
//                        value = previousInteger + 1;
//                        break;
//                    }

//                    previousInteger = orderedIntegers[i];
//                }
//            }
//        }

//        return value;

//        // Implement your solution here
//        IEnumerable<int> positiveIntegers = A.Where(x => x > 0);

//        if (positiveIntegers.Count() == 0)
//            value = 1;
//        else
//        {
//            int minimumPositiveInteger = A.Min();

//            if (minimumPositiveInteger > 1)
//                value = 1;
//            else
//            {
//                int[] sortedPositiveIntegers = positiveIntegers.Order().ToArray();

//                for (int i = 0; i < sortedPositiveIntegers.Count(); i++)
//                {
//                    if (sortedPositiveIntegers[i] > i + 1)
//                        value = sortedPositiveIntegers[i] - 1;
//                    else if (i == sortedPositiveIntegers.Count() - 1)
//                        value = sortedPositiveIntegers[i] + 1;
//                }
//            }
//        }

//        return value;
//    }
//}
