const request = require('supertest')
const { Produto } = require('../models')
const app = require('../app')

describe('Produtos', () => {
  
  beforeEach( async () => {
    await Produto.destroy({
      where:{},
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
