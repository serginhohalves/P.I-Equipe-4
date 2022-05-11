const { Produto, sequelize } = require('../models')
const produtoJson = require('../models/produtos.json')

const seeder = async () => {
  try {
    await Produto.destroy({
        where:{}
    })
    await Produto.bulkCreate(produtoJson)
    sequelize.close()
  } catch (error) {
    console.log(error)
  }

}

seeder()

module.exports = seeder
