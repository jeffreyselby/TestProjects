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
        [InlineData(-1)]
        [InlineData(0)]
        [InlineData(1)]
        [InlineData(3)]
        public void TestIsPrimeWithTheory(int value)
        {
            var mathService = new MathService();

            bool result = mathService.IsPrime(value);

            Assert.False(result, "1 should not be prime");
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