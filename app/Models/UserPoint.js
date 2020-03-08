'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserPoint extends Model {
  static get table () {
    return 'user_points'
  }
}

module.exports = UserPoint
