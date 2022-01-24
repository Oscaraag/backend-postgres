'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');
const { DataTypes, Sequelize } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'name', {
      name: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'name');
  },
};
