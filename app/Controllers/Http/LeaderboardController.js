'use strict'

const User = use('App/Models/User')
const lodash = require('lodash')

class LeaderboardController {
  async index ({ request }) {
    const users = await User.query().with('points').fetch()
    const json = users.toJSON()

    for (const user of json) {
      let total = 0

      for (const point of user.points) {
        total += point.points
      }

      user.total_points = total
    }

    const ordered = lodash.orderBy(json, 'total_points', 'desc')

    return ordered
  }
}

module.exports = LeaderboardController
