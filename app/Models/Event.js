'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {
  pontuations () {
    return this.hasMany('App/Models/Pontuation')
  }
}

module.exports = Event
