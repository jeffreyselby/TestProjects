using System.Data;
using TestClassLibrary;

namespace XUnitTestProject
{
    public class DatabaseTest
    {
        [Fact]
        public void TestReadPerson()
        {           
            // Server "softserver" must be running in Microsoft Azure
            //DatabaseService databaseService = new DatabaseService();
            //DataTable dataTable = databaseService.ReadPerson();
            //Assert.True(dataTable.Rows.Count > 0);
        }
    }
}
