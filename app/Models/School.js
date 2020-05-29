'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class School extends Model {
    function() {
        return this.hasOne('App/Models/Function')
    }
}

module.exports = School
