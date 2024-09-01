const express = require("express");
// const mySql = require("mysql");
const cors = require("cors");
const app = express();
const NoteApp = require("./routes/NoteAppRoute.js")
app.use(cors());
app.use(express.json());

// const connect = mySql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "WebApp",
// });

// function createDatabase(dbName, tableName) {
//   const dbQuery = `CREATE DATABASE IF NOT EXISTS ${dbName}`;
//   const useDbQuery = `USE ${dbName}`;
//   const tableQuery = `
//     CREATE TABLE IF NOT EXISTS ${tableName} (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       title VARCHAR(255) NOT NULL,
//       content TEXT,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )`;

//   connect.query(dbQuery, (err, result) => {
//     if (err) {
//       console.error("Error creating database:", err);
//       return;
//     }
//     console.log(`Database "${dbName}" created or already exists.`);

//     // Now switch to the newly created or existing database
//     connect.query(useDbQuery, (err, result) => {
//       if (err) {
//         console.error("Error switching to database:", err);
//         return;
//       }
//       console.log(`Using database "${dbName}".`);

//       // Now create the table
//       connect.query(tableQuery, (err, result) => {
//         if (err) {
//           console.error("Error creating table:", err);
//           return;
//         }
//         console.log(`Table "${tableName}" created or already exists.`);
//       });
//     });
//   });
// }

// module.exports = {connect};
// Call the function to create the database
// createDatabase("WebApp", "notes");

app.use('/api/v1', NoteApp);



app.listen(8081, () => {
  console.log("http://localhost:8081}");
});
