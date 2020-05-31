'use strict'

const Validator = use('Validator')
const Database = use('Database')
const School = use('App/Models/School')

const schoolEnableValidator = async (data, field, message, args, get) => {
  const value = get(data, field)
  const school = await School.findOrFail(value)
  if (school.enable) {
    return
  } else {
    throw message
  }
}

Validator.extend('schoolEnable', schoolEnableValidator)

class UserRegister {
  get rules() {
    return {
      email: 'required|email|unique:users',
      school_id: 'required|schoolEnable',
      password: 'required|min:6|max:32'
    }
  }

  get messages() {
    return {
      'email.required': 'メールアドレスを入力してください',
      'email.email': '正しいメールアドレスを入力してください',
      'email.unique': 'このメールアドレスすでに登録されています',
      'password.required': 'パスワードを入力してください',
      'school_id.required': '利用学校を選択してください',
      'school_id.schoolEnable': '選択した学校は有効ではありません'
    }
  }
}

module.exports = UserRegister
