'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()

      table.string('title')
      table.string('description')
      table.string('cover_url')
      table.string('location')
      table.datetime('date')
      table.string('tickets_url')

      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
