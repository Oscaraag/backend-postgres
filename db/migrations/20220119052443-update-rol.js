'use strict';
const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(USER_TABLE, 'role', UserSchema.role);
  },
};
