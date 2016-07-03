'use strict'

const Model = require('trails-model')

/**
 * @module User
 * @description User account object
 */
module.exports = class User extends Model {

  static config () {
  }

  static schema (app, Sequelize) {
    return {
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'your name'
      },
      // tokens: {
      //   collection: 'WebToken',
      //   via: 'user'
      // }
    }
  }

}
