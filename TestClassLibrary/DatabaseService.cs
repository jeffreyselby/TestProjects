using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;

namespace TestClassLibrary
{
    public class DatabaseService
    {
        public DataTable ReadPerson()
        {
            // Read table dbo.Person from Azure SQL Server
            DataTable dataTable = new DataTable();
                        
            string connectionString = "Server=tcp:softserver.database.windows.net,1433;Initial Catalog=TestDatabase;Persist Security Info=False;User ID=SqlAdmin;Password=Charles5;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("SELECT * FROM [dbo].[Person]", connection);
                cmd.CommandType = CommandType.Text;
                connection.Open();
                SqlDataReader dataReader = cmd.ExecuteReader();
                                
                dataTable.Load(dataReader);               
            }

            return dataTable;
        }
    }
}
