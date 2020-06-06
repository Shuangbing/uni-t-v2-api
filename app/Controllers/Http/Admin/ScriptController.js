'use strict'

const Script = use('App/Models/Script')

class ScriptController {
    async index() {
        return await Script.all()
    }

    async show({ request, response }) {
        const { id } = request.params
        const script = await Script.find(id)
        return script
    }

    async store({ request, response }) {
        const { school_id, timetable, wlan, attendance, grade } = request.post()
        const script = new Script()

        script.school_id = school_id
        script.timetable = timetable
        script.wlan = wlan
        script.attendance = attendance
        script.grade = grade

        await script.save()

        return script
    }

    async destroy({ request, response }) {
        const { id } = request.params
        const script = await Script.find(id)
        return await script.delete()
    }

    async update({ request, response }) {
        const { id } = request.params
        const { timetable, wlan, attendance, grade } = request.post()

        const script = await Script.find(id)
        script.timetable = timetable
        script.wlan = wlan
        script.attendance = attendance
        script.grade = grade
        await script.save()

        return script
    }
}

module.exports = ScriptController
