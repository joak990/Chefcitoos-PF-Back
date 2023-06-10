require('dotenv').config();
const { USERNAME,
  PASSWORD,
  DATABASE,
  HOST } = process.env

module.exports = {
  "development": {
    "username": "awschefcitoos",
    "password": "chefcitoosdb",
    "database": "chefcitoos",
    "host": "database-1.cqawfiwiwudi.us-east-2.rds.amazonaws.com",
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
