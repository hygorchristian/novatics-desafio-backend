const { test, trait, before, after } = use('Test/Suite')('Pontuation')

const User = use('App/Models/User')
const Pontuation = use('App/Models/Pontuation')

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
    await Pontuation.create({
      event_id: 1,
      title: 'teste',
      code: 'teste',
      points: 1
    })
  }
})

after(async () => {
  const user = await User.findByOrFail('email', mock.user.email)
  await user.delete()
})

test('Create pontuation', async ({ client }) => {
  const user = await User.findByOrFail('email', mock.user.email)
  const data = {
    event_id: 1,
    title: 'teste',
    code: 'teste',
    points: 1
  }

  const response = await client
    .post('/pontuations')
    .send(data)
    .loginVia(user, 'jwt')
    .end()

  response.assertStatus(200)
  response.assertJSONSubset({
    event_id: 1,
    title: 'teste',
    code: 'teste',
    points: 1
  })
})

test('Get one pontuation', async ({ client }) => {
  const response = await client
    .get('/pontuations/2')
    .end()

  response.assertStatus(200)
})

test('Get all pontuations', async ({ client }) => {
  const response = await client
    .get('/pontuations')
    .end()

  response.assertStatus(200)

  response.assertJSONSubset({
    data: [{
      event_id: 1,
      title: 'teste',
      code: 'teste',
      points: 1
    }]
  })
})

test('Update pontuation', async ({ client }) => {
  const user = await User.findByOrFail('email', mock.user.email)
  const data = {
    event_id: 2,
    title: 'teste-update',
    code: 'teste-update',
    points: 2
  }

  const response = await client
    .put('/pontuations/1')
    .send(data)
    .loginVia(user, 'jwt')
    .end()

  response.assertStatus(200)

  response.assertJSONSubset({
    event_id: data.event_id
  })
})

test('Delete pontuation', async ({ client }) => {
  const user = await User.findByOrFail('email', mock.user.email)

  const response = await client
    .delete('/pontuations/1')
    .loginVia(user, 'jwt')
    .end()

  response.assertStatus(204)
})
