using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsoleAppFramework
{
   
    class Solution
    {

        public int solution(int[] A)
        {
            int value = 1;

            if (A != null && A.Length > 0)
            {
                int previousInteger = 0;
                int[] orderedIntegers = A.OrderBy(x => x).ToArray();

                for (int i = 0; i < orderedIntegers.Length; i++)
                {
                    if (orderedIntegers[i] > 0)
                    {
                        if (orderedIntegers[i] > previousInteger + 1)
                        {
                            value = previousInteger + 1;
                            break;
                        }
                        else if (i == orderedIntegers.Length - 1)
                            value = orderedIntegers[i] + 1;

                        previousInteger = orderedIntegers[i];
                    }
                }
            }

            return value;

        }
    }

}
