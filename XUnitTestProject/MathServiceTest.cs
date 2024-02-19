using System.Collections;
using System.Diagnostics;
using System.Net.Security;
using TestClassLibrary;

namespace XUnitTestProject
{
    

    public class MathServiceTest
    {
        

        [Fact]
        public void DeleteMe()
        {
            var list = new List<int> { 1, 2, 5, 5 };

            var j = list.FirstOrDefault(x => x == 2);




            //int x = 3;

            //int Sixteen = 0b0001_0000;
            //Debug.WriteLine(Sixteen);


            Debug.WriteLine(Convert.ToInt32('A'));

            float f = 10.12f;
            long l = 200L;

            Debug.WriteLine(f+l);

            var i = 3;


        }

        [Fact]
        public void TestIsPrimeWithFact()
        {
            var primeService = new MathService();

            bool result = primeService.IsPrime(1);

            Assert.False(result, "1 should not be prime");
        }

        [Theory]
        [InlineData(-1, false)]
        [InlineData(0, false)]
        [InlineData(1, false)]
        [InlineData(3, true)]
        public void TestIsPrimeWithTheory(int value, bool expectedResult)
        {
            var mathService = new MathService();

            bool actualResult = mathService.IsPrime(value);

            Assert.Equal(actualResult, expectedResult);
        }

        [Fact]
        public void TestAddNumbers()
        {
            MathService mathService = new MathService();
            var result = mathService.Add(3, 5);

            Assert.Equal(8, result);
        }

        [Theory]
        [InlineData(5,3,2)]
        [InlineData(8,5,3)]
        public void TestSubtractNumbers(double num1, double num2, double expectedResult)
        {
            MathService mathService = new MathService();
            var actualResult = mathService.Subtract(num1, num2);

            Assert.Equal(expectedResult, actualResult);
        }
    }
}