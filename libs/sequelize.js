const { Sequelize } = require('sequelize');
const setUpModels = require('./../db/models');

const {
  config: { dbUrl, isProd },
} = require('../config/config');

const DB_URL = dbUrl;

const options = {
  dialect: 'postgres',
  logging: isProd ? false : true,
  ssl: isProd && {
    rejectUnauthorized: false,
  },
};

const sequelize = new Sequelize(DB_URL, options);

setUpModels(sequelize);

module.exports = sequelize;
