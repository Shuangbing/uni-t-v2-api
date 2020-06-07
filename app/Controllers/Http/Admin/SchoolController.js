'use strict'

const School = use('App/Models/School')

class SchoolController {
    async index() {
        return await School.all()
    }

    async show({ request, response }) {
        const { id } = request.params
        const school = await School.find(id)
        return school
    }

    async store({ request, response }) {
        const { title, enable } = request.post()
        const school = new School()

        school.title = title
        school.enable = enable
        await school.save()

        return school
    }

    async destroy({ request, response }) {
        const { id } = request.params
        const school = await School.find(id)
        return await school.delete()
    }

    async update({ request, response }) {
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
