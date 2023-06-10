require('dotenv').config();
const { USERNAME,
  PASSWORD,
  DATABASE,
  HOST } = process.env

module.exports = {
  "development": {
    "username": USERNAME,
    "password": PASSWORD,
    "database": DATABASE,
    "host": HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": USERNAME,
    "password": PASSWORD,
    "database": DATABASE,
    "host": HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": USERNAME,
    "password": PASSWORD,
    "database": DATABASE,
    "host": HOST,
    "dialect": "postgres"
  }
}
