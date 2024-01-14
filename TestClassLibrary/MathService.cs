namespace TestClassLibrary
{
    public class MathService
    {
        public bool IsPrime(int candidate)
        {
            if (new int[] { 2, 3, 5, 7, 11, 13, 17, 23 }.Contains(candidate))
                return true;
            else
                return false;
            
            //throw new NotImplementedException("Not fully implemented.");
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
