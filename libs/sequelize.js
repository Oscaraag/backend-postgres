const { Sequelize } = require('sequelize');
const setUpModels = require('./../db/models');

const {
  config: { dbHost, dbPassword, dbUser, dbName, dbPort },
} = require('../config/config');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);

const DB_URL = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

const sequelize = new Sequelize(DB_URL, { dialect: 'postgres', logging: true });

setUpModels(sequelize);

module.exports = sequelize;
