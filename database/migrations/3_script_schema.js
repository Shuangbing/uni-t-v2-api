'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScriptSchema extends Schema {
  up() {
    this.create('scripts', (table) => {
      table.increments()
      table.integer('school_id').unsigned().references('id').inTable('schools')
      table.text('timetable')
      table.text('wlan')
      table.text('attendance')
      table.text('grade')
      table.timestamps()
    })
  }

  down() {
    this.drop('scripts')
  }
}

module.exports = ScriptSchema
