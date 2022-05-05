module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        foto_perfil: DataTypes.STRING,
        nome: DataTypes.STRING
    }, {
        tableName: 'usuario',
        timestamps: false
    })

    return Usuario
}