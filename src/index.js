require('dotenv').config({ path: __dirname + '/../.env' }); 

const PORT = process.env.PORT_NUM;
const express = require('express');
const app = express();
const mysql = require('mysql');
const environment = require('../utils/index');

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

app.use(express.json());

const cors = require('cors');

app.use(cors());

const router = require('./routes/index');

app.use(router);


app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`);
});

module.exports = app;