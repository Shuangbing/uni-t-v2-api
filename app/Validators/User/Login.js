'use strict'

class UserLogin {
  get rules() {
    return {
      email: 'required|email',
      password: 'required|min:6|max:32'
    }
  }

  get messages() {
    return {
      'email.required': 'メールアドレスを入力してください',
      'email.email': '正しいメールアドレスを入力してください',
      'password.required': 'パスワードを入力してください',
      'password.min': 'パスワードが6桁以上の文字が必要です',
      'password.max': 'パスワードが32桁以内の文字が必要です',
    }
  }
}

module.exports = UserLogin
