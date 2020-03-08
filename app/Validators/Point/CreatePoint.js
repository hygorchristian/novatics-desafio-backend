'use strict'

class CreatePoint {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      code: 'required'
    }
  }

  get messages () {
    return {
      'code.required': 'Você deve informar o campo code'
    }
  }
}

module.exports = CreatePoint
