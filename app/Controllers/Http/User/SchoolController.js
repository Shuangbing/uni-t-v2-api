'use strict'

const School = use('App/Models/School')
const Script = use('App/Models/Script')
const axios = require('axios')

class SchoolController {
    async fetch() {
        return await School.query().where('enable', '=', true).fetch()
    }

    async timetable({ auth, request }) {
        const user = await auth.getUser()
        const school = await School.find(user.school_id)
        const script = await Script.find(user.school_id)
        const { timetable } = script
        const result = await eval(timetable)('school_account', 'school_password')

        return {
            statusCode: result.statusCode,
            school: school,
            data: result.data
        }
    }
}




module.exports = SchoolController
