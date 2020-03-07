'use strict'

const User = use('App/Models/User')
const axios = require('axios')

class AuthController {
  async store ({ request, response, auth }) {
    const { username } = request.all()
    const user = await User.findBy('username', username)

    if (user) { // User exists
      const token = await auth.generate(user)
      user.token = token.token

      return user
    } else { // User don't exist, so create a new one
      try {
        const gitResponse = await axios.get(`https://api.github.com/users/${username}`)
        const gitdata = gitResponse.data

        const data = {
          username,
          avatar_url: gitdata.avatar_url,
          url: gitdata.url,
          name: gitdata.name,
          email: gitdata.email
        }

        const new_user = await User.create(data)
        const token = await auth.generate(new_user)
        new_user.token = token.token

        return new_user
      } catch (e) {
        return response.status(404).send({ error: 'Not found', message: 'The username provided was not found in github users' })
      }
    }
  }

  async destroy ({ request, auth }) {
    // const { email, password } = request.all()
  }
}

module.exports = AuthController
