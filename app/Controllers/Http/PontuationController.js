'use strict'

const Pontuation = use('App/Models/Pontuation')

class PontuationController {
  async index ({ request }) {
    const {
      page = 1,
      perPage = 10,
      sort = 'created_at',
      order = 'ASC'
    } = request.get()

    const query = Pontuation.query().orderBy(sort, order)
    const pontuations = await query.paginate(page, perPage)
    return pontuations
  }

  async show ({ params }) {
    const pontuation = await Pontuation.findOrFail(params.id)
    return pontuation
  }

  async store ({ request }) {
    const data = request.only([
      'event_id',
      'title',
      'code',
      'points'
    ])

    const pontuation = await Pontuation.create(data)

    return pontuation
  }

  async update ({ params, request }) {
    const pontuation = await Pontuation.findOrFail(params.id)
    const data = request.only([
      'event_id',
      'title',
      'code',
      'points'
    ])

    pontuation.merge(data)

    await pontuation.save()

    return pontuation
  }

  async destroy ({ params }) {
    const pontuation = await Pontuation.findOrFail(params.id)
    pontuation.delete()
  }
}

module.exports = PontuationController
