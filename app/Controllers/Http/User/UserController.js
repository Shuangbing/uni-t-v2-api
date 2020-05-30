'use strict'

const School = use('App/Models/School')
const User = use('App/Models/User')

class UserController {
    async register({ request, response }) {
        const { email, password, school_id } = request.post()
        const school = await School.findOrFail(school_id)
        if (!school.enable) return { message: '正しい学校を選択してください' }
        
        const user = new User()
        user.email = email
        user.password = password
        user.school_id = school_id
        await user.save()

        return user
    }
}

module.exports = UserController