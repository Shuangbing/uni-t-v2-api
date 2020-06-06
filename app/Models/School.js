'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class School extends Model {
    script() {
        return this.hasOne('App/Models/Script')
    }
}

module.exports = School
