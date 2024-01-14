using TestClassLibrary;

namespace XUnitTestProject
{
    public class MathServiceTest
    {
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