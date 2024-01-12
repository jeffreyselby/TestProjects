using System.Data;
using TestClassLibrary;

namespace XUnitTestProject
{
    public class DatabaseTest
    {
        [Fact]
        public void TestReadPerson()
        {
            DatabaseService databaseService = new DatabaseService();

            DataTable dataTable = databaseService.ReadPerson();

            Assert.True(dataTable.Rows.Count > 0);
        }
    }
}
