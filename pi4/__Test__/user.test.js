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
  .send({email, senha})
  .then(response => {
    expect(response.type).toBe('application/json')
    expect(response.body.cookie).toBeDefined()
    done()
  })
})

describe('Testa o diretorio raiz', () => {
  test('Deve responder o metodo GET', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.type).toBe('application/json')
        done()
      })
  })
})


