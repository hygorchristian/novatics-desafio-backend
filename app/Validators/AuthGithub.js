'use strict'

class Auth {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required'
    }
  }
}

module.exports = Auth
