'use strict'

class CreatePontuation {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      event_id: 'required',
      title: 'required',
      code: 'required',
      points: 'required'
    }
  }

  get messages () {
    return {
      'event_id.required': 'Você deve informar o campo event_id',
      'title.required': 'Você deve informar o campo title',
      'code.required': 'Você deve informar o campo code',
      'points.required': 'Você deve informar o campo points'
    }
  }
}

module.exports = CreatePontuation
