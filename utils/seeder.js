const { Produto, sequelize } = require('../models')
const produtoJson = require('../models/produtos.json')

const seeder = async () => {
  try {
    await Produto.destroy({
      where: {},
    })
    let listaDeProdutos = await Produto.bulkCreate(produtoJson)
    return listaDeProdutos
  } catch (error) {
    console.log(error)
  }
}

seeder()

module.exports = seeder
