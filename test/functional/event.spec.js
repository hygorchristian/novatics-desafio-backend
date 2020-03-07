const { test, trait, before, after } = use('Test/Suite')('Event')

const User = use('App/Models/User')
const Event = use('App/Models/Event')

trait('Test/ApiClient')
trait('Auth/Client')

const mock = {
  user: {
    email: 'teste@teste.com',
    username: 'tester'
  }
}

before(async () => {
  await User.create(mock.user)

  for (let i = 0; i < 5; i++) {
    await Event.create({
      title: 'teste',
      description: 'teste',
      cover_url: 'teste',
      location: 'teste',
      date: '2020-01-09 22:29:54',
      tickets_url: 'teste'
    })
  }
})

after(async () => {
  const user = await User.findByOrFail('email', mock.user.email)
  await user.delete()
})

test('Create event', async ({ client }) => {
  const user = await User.findByOrFail('email', mock.user.email)
  const data = {
    title: 'teste',
    description: 'teste',
    cover_url: 'teste',
    location: 'teste',
    date: '2020-01-09 22:29:54',
    tickets_url: 'teste'
  }

  const response = await client
    .post('/events')
    .send(data)
    .loginVia(user, 'jwt')
    .end()

  response.assertStatus(200)
  response.assertJSONSubset({
    title: 'teste',
    description: 'teste',
    cover_url: 'teste',
    location: 'teste',
    date: '2020-01-09 22:29:54',
    tickets_url: 'teste'
  })
})

test('Get one event', async ({ client }) => {
  const response = await client
    .get('/events/2')
    .end()

  response.assertStatus(200)
})

test('Get all events', async ({ client }) => {
  const response = await client
    .get('/events')
    .end()

  response.assertStatus(200)

  response.assertJSONSubset({
    data: [{
      title: 'teste',
      description: 'teste',
      cover_url: 'teste',
      location: 'teste',
      date: '2020-01-09 22:29:54',
      tickets_url: 'teste'
    }]
  })
})

test('Update event', async ({ client }) => {
  const user = await User.findByOrFail('email', mock.user.email)
  const data = {
    title: 'teste-update',
    description: 'teste-update',
    cover_url: 'teste-update',
    location: 'teste-update',
    date: '2021-01-09 22:29:54',
    tickets_url: 'teste-update'
  }

  const response = await client
    .put('/events/1')
    .send(data)
    .loginVia(user, 'jwt')
    .end()

  response.assertStatus(200)

  response.assertJSONSubset({
    title: data.title
  })
})

test('Delete event', async ({ client }) => {
  const user = await User.findByOrFail('email', mock.user.email)

  const response = await client
    .delete('/events/1')
    .loginVia(user, 'jwt')
    .end()

  response.assertStatus(204)
})
