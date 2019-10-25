
const mysql = require('mysql');
const environment = require('../../utils/index');

const connection = mysql.createConnection({
  host: environment.HOST,
  user: environment.USERNAME,
  password: environment.PASSWORD,
  database: environment.DB_NAME,
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connection established');
});

module.exports = connection;