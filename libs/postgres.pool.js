const { Pool } = require('pg');
const {
  config: { dbHost, dbPassword, dbUser, dbName, dbPort },
} = require('../config/config');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);

const DB_URL = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

const pool = new Pool({
  connectionString: DB_URL,
});
pool.connect();

module.exports = pool;
