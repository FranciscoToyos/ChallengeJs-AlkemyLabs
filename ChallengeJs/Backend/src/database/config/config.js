require('dotenv').config();

module.exports = {
  "development": {
    "username": 'root',
    "password": 'AgusFran28',
    "database": 'personal_budget_manag.db',
    "host": "127.0.0.1",
    "port":3306,
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0
  }
}
