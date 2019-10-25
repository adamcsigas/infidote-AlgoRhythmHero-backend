require('dotenv').config();

module.exports = {
  env: 'development',
  DB_NAME: process.env.DB_NAME,
  USERNAME: process.env.DB_USER,
  PASSWORD: process.env.DB_PASS,
  HOST: process.env.DB_HOST,
  port: process.env.DB_PORT || 4000,
};