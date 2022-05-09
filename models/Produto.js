module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        valor: DataTypes.DECIMAL,
        categoria: DataTypes.STRING,
        estoque: DataTypes.INTEGER,
        imagem_produto: DataTypes.STRING
    }, {
        tableName: 'produto',
        timestamps: false
    })

    return Produto
}