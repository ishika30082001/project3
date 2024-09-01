const mySql = require("mysql");

const connect = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "WebApp",
});

function createDatabase(dbName, tableName) {
  const dbQuery = `CREATE DATABASE IF NOT EXISTS ${dbName}`;
  const useDbQuery = `USE ${dbName}`;
  const tableQuery = `
      CREATE TABLE IF NOT EXISTS ${tableName} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`;

  connect.query(dbQuery, (err, result) => {
    if (err) {
      console.error("Error creating database:", err);
      return;
    }
    console.log(`Database "${dbName}" created or already exists.`);

    // Now switch to the newly created or existing database
    connect.query(useDbQuery, (err, result) => {
      if (err) {
        console.error("Error switching to database:", err);
        return;
      }
      console.log(`Using database "${dbName}".`);

      // Now create the table
      connect.query(tableQuery, (err, result) => {
        if (err) {
          console.error("Error creating table:", err);
          return;
        }
        console.log(`Table "${tableName}" created or already exists.`);
      });
    });
  });
}
createDatabase("WebApp", "notes");

module.exports = {connect};