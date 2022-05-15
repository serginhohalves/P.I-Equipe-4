const { Usuario } = require('../models')
const request = require('supertest')
const app = require('../app')

describe('Usuários', () => {
  beforeEach(async () => {
    await Usuario.destroy({
      where: {},
    })
  })

  test('Deve cadastrar Usuário no banco', (done) => {
    let email = 'rafael@mail.com'
    let senha = '123456'

    request(app)
      .post('/users/registro')
      .send({ email, senha })
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})

test('Deve fazer login e passar o cookie', done => {
  let email = 'rafael@mail.com'
  let senha = '123456'

  request(app)
    .post('/users/login')
    .send({ email, senha })
    .then(response => {
      expect(response.type).toBe('application/json')
      expect(response.body.cookie).toBeDefined()
      done()
    })
})

test('Deve falhar ao tentar cadastrar usuario com email existente', done => {
  let email = 'rafael@mail.com'
  let senha = '123456'

  request(app)
    .post('/users/registro')
    .send({ email, senha })
    .then(response => {
      expect(response.statusCode).toBe(401)
      expect(response.body.cookie).toBeUndefined()
      expect(response.body.message).toBe('Já existe uma conta cadastrada para este email.')
      done()
    })
})

test('Deve falhar se o usuário não fornecer os dados', done => {
  let email
  let senha

  request(app)
    .post('/users/login')
    .send({ email, senha })
    .then(response => {
      expect(response.statusCode).toBe(400)
      expect(response.body.message).toBe('Por favor, digite o email e a senha')
      done()
    })
})

test('Deve responder com erro se não encontrar o usuário', done => {
  let email = 'x@y.com'
  let senha = '123456'

  request(app)
    .post('/users/login')
    .send({ email, senha })
    .then(response => {
      expect(response.statusCode).toBe(400)
      expect(response.body.message).toBe('Email ou senha inválidos')
      done()
    })
})

test('Deve responder com erro ao enviar senha incorreta', done => {
  let email = 'rafael@mail.com'
  let senha = '1234789'

  request(app)
    .post('/users/login')
    .send({ email, senha })
    .then(response => {
      expect(response.statusCode).toBe(400)
      expect(response.body.message).toBe('Email ou senha inválidos')
      done()
    })

})

describe('Testa o diretorio raiz', () => {
  test('Deve responder o metodo GET', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        expect(response.type).toBe('text/html')
        done()
      })
  })
})


