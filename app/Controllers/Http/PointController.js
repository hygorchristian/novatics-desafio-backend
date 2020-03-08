'use strict'

const Pontuation = use('App/Models/Pontuation')
const UserPoint = use('App/Models/UserPoint')

class PointController {
  async store ({ request, response, auth }) {
    const { code } = request.only(['code'])

    const pontuation = await Pontuation.findByOrFail('code', code)

    const count = await UserPoint.query()
      .where('user_id', auth.user.id)
      .where('pontuation_id', pontuation.id)
      .count()

    const total = count[0]['count(*)']

    if (total > 0) {
      return response.status(403).send({
        error: 403,
        message: 'This code is already used'
      })
    }

    if (pontuation) {
      const data = {
        user_id: auth.user.id,
        pontuation_id: pontuation.id
      }

      const userPoint = await UserPoint.create(data)

      return { success: userPoint }
    }
  }
}

module.exports = PointController
