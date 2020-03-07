'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PontuationSchema extends Schema {
  up () {
    this.create('pontuations', (table) => {
      table.increments()

      table.integer('event_id')
        .unsigned()
        .references('id')
        .inTable('events')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')

      table.string('title')
      table.string('code')
      table.integer('points')

      table.timestamps()
    })
  }

  down () {
    this.drop('pontuations')
  }
}

module.exports = PontuationSchema
