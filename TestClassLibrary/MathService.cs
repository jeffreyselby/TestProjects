namespace TestClassLibrary
{
    public class MathService
    {
        public bool IsPrime(int candidate)
        {
            if (candidate < 2)            
                return false;
            
            throw new NotImplementedException("Not fully implemented.");
        }

        public double Add(double num1, double num2)
        {
            return num1 + num2;
        }

        public double Subtract(double num1, double num2)
        {
            return num1 - num2;
        }
    }
}
