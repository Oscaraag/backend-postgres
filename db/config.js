const {
  config: { dbHost, dbPassword, dbUser, dbName, dbPort },
} = require('../config/config');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);

const DB_URL = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

module.exports = {
  development: {
    url: DB_URL,
    dialect: 'postgres',
  },
  production: {
    url: DB_URL,
    dialect: 'postgres',
  },
};
