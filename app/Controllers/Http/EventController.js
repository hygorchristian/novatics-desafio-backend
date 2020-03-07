'use strict'

const Event = use('App/Models/Event')

class EventController {
  async index ({ request }) {
    const {
      page = 1,
      perPage = 10,
      sort = 'created_at',
      order = 'ASC'
    } = request.get()

    const query = Event.query().orderBy(sort, order)
    const events = await query.paginate(page, perPage)
    return events
  }

  async show ({ params }) {
    const event = await Event.findOrFail(params.id)
    return event
  }

  async store ({ request }) {
    const data = request.only([
      'title',
      'description',
      'cover_url',
      'location',
      'date',
      'tickets_url'
    ])

    const event = await Event.create(data)

    return event
  }

  async update ({ params, request }) {
    const event = await Event.findOrFail(params.id)
    const data = request.only([
      'title',
      'description',
      'cover_url',
      'location',
      'date',
      'tickets_url'
    ])

    event.merge(data)

    await event.save()

    return event
  }

  async destroy ({ params }) {
    const event = await Event.findOrFail(params.id)
    event.delete()
  }
}

module.exports = EventController
