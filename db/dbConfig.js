const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config()
const dbConnection = mysql2.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: "sql12.freesqldatabase.com",
  password: process.env.PASSWORD,
  connectionLimit: 10,
});




module.exports = dbConnection.promise();