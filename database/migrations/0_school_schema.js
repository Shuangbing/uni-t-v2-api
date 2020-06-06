'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchoolSchema extends Schema {
  up() {
    this.create('schools', (table) => {
      table.increments()
      table.string('title', 254).notNullable().unique()
      table.boolean('enable').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('schools')
  }
}

module.exports = SchoolSchema
