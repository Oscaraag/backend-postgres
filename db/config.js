const {
  config: { dbUrl },
} = require('../config/config');

const DB_URL = dbUrl;

module.exports = {
  development: {
    url: DB_URL,
    dialect: 'postgres',
  },
  production: {
    url: DB_URL,
    dialect: 'postgres',
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
