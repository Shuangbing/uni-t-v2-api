'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FunctionSchema extends Schema {
  up () {
    this.create('functions', (table) => {
      table.increments()
      table.text('timetable')
      table.text('wlan')
      table.text('attendance')
      table.text('grade')
      table.timestamps()
    })
  }

  down () {
    this.drop('functions')
  }
}

module.exports = FunctionSchema
