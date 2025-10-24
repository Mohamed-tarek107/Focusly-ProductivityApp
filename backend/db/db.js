import dotenv from "dotenv";
const mysql = require("mysql2");


const connection = mysql.createConnection({
  host: 'localhost',   
  user: 'root',         
  password: process.dotenv.DBPass,
  database: 'test'     
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting:', err);
    return;
  }
  console.log('Connected to MySQL successfully!');
});

module.exports = connection;