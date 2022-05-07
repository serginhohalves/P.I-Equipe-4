const { Usuario } = require('../models')
const request = require('supertest')
const app = require('../app')

describe('Usuários', () => {
  beforeEach(async () => {})

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

describe('Testa o diretorio raiz', () => {
  test('Deve responder o metodo GET', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})
