const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();



const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT, // Add this line
  waitForConnections: true,
});



module.exports = db;

//docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=afterlife -e MYSQL_DATABASE=UlysseMarket -p 3306:3306 -d mysql:latest