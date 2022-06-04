const { Produto, sequelize } = require('../models')
const produtoJson = require('../models/produtos.json')

const seeder = async () => {
  try {
    await Produto.destroy({
      where: {},
    })
    await Produto.bulkCreate(produtoJson)
    console.log('Todos os produtos foram adicionados com sucesso!')
    return 'Todos os produtos foram adicionados com sucesso!'
  } catch (error) {
    return error
  }
}

seeder()

module.exports = seeder
