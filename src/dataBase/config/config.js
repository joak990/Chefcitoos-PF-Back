require('dotenv').config();
const { DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST } = process.env

module.exports = {
  "development": {
   "username":DB_USER,
    "password":DB_PASSWORD,
    "database":DB_NAME,
    "host":DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "awschefcitoos",
    "password": "chefcitoosdb",
    "database": "chefcitoos",
    "host": "database-1.cqawfiwiwudi.us-east-2.rds.amazonaws.com",
    "dialect": "postgres"
  },
  "production": {
    "username": "awschefcitoos",
    "password": "chefcitoosdb",
    "database": "chefcitoos",
    "host": "database-1.cqawfiwiwudi.us-east-2.rds.amazonaws.com",
    "dialect": "postgres"
  }
}
