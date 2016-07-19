'use strict'

const Service = require('trails-service')

// api/services/UserService.js
module.exports = class UserService extends Service {
  /**
   * Finds people with the given email.
   * @return Promise
   * @example {
   *    name: 'Ludwig Beethoven',
   *    email: 'someemail@email.com',
   *    favoriteColors: [
   *      { name: 'yellow', hex: 'ffff00' },
   *      { name: 'black', hex: '000000' }
   *     ]
   * }
   */
  findUser (email) {
    //More info about queries here : http://docs.sequelizejs.com/en/latest/docs/models-usage/
    return this.app.orm.User.find({ where: {email: email} })
  }
}
