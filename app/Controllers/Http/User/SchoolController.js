'use strict'

const School = use('App/Models/School')

class SchoolController {
    async fetch() {
        return await School.query().where('enable', '=', true).fetch()
    }
}

module.exports = SchoolController
