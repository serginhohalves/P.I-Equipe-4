const request = require('supertest')
const { Produto } = require('../models')
const app = require('../app')
const seeder = require('../utils/seeder')

describe('Produtos', () => {
  
  beforeEach( async () => {
    await Produto.destroy({
      where:{},
    })
  })

  test('Deve adicionar muitos produtos no banco', async () => {
    await seeder().then( data => {
     expect(data).toBeDefined()
    })
  })

  test('Detalhe produto', (done) => {
    request(app)
      .get('/produtos/detalhe')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })

  test('Inserir Produto no banco', (done) => {
    let produto = {
      nome: 'produto 1',
      descricao: 'Descrição do produto',
      valor: 129.1,
      categoria: 'Categoria do produto',
      imagem_produto: 'url',
      estoque: 25,
    }

    let {nome, descricao, valor, categoria, imagem_produto, estoque } = produto

    request(app)
    .post('/produtos/novo')
    .send({nome, descricao, valor, categoria, imagem_produto, estoque})
    .then(response => {
        expect(response.statusCode).toBe(200)
        done()
    })
  })
})
