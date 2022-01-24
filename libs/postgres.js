const { Client } = require('pg');

const getConnection = async () => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'oangel',
    password: '23497900',
    database: 'my_store',
  });
  await client.connect();
  return client;
};

module.exports = getConnection;
