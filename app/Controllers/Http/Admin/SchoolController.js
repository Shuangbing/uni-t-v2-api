'use strict'

const School = use('App/Models/School')

class SchoolController {
    async fetch() {
        return await School.all()
    }

    async add({ request, response }) {
        const { title, enable } = request.post()
        const school = new School()

        school.title = title
        school.enable = enable
        await school.save()

        return school
    }

    async remove({ request, response }) {
        const { id } = request.params
        const school = await School.find(id)
        return await school.delete()
    }

    async edit({ request, response }) {
        const { id } = request.params
        const { title, enable } = request.post()
        
        const school = await School.find(id)
        school.title = title
        school.enable = enable
        await school.save()

        return school
    }
}

module.exports = SchoolController
