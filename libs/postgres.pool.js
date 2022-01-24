const { Pool } = require('pg');
const {
  config: { dbHost, dbPassword, dbUser, dbName, dbPort, isProd, dbUrl },
} = require('../config/config');

let URI = '';

if (isProd) {
  URI = dbUrl;
} else {
  const USER = encodeURIComponent(dbUser);
  const PASSWORD = encodeURIComponent(dbPassword);

  URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;
}

const pool = new Pool({
  connectionString: URI,
  ssl: {
    rejectUnauthorized: isProd ? false : true,
  },
});
pool.connect();

module.exports = pool;
