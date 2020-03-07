'use strict'

class UpdateEvent {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      description: 'required',
      cover_url: 'required',
      location: 'required',
      date: 'required',
      tickets_url: 'required'
    }
  }

  get messages () {
    return {
      'title.required': 'Você deve informar o campo title',
      'description.required': 'Você deve informar o campo description',
      'cover_url.required': 'Você deve informar o campo cover_url',
      'location.required': 'Você deve informar o campo location',
      'date.required': 'Você deve informar o campo date',
      'tickets_url.required': 'Você deve informar o campo tickets_url'
    }
  }
}

module.exports = UpdateEvent
