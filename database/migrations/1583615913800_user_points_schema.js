'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserPointsSchema extends Schema {
  up () {
    this.create('user_points', (table) => {
      table.increments()

      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')

      table.integer('pontuation_id')
        .unsigned()
        .references('id')
        .inTable('pontuations')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')

      table.timestamps()
    })
  }

  down () {
    this.drop('user_points')
  }
}

module.exports = UserPointsSchema
