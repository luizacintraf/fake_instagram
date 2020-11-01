module.exports = (sequelize, DataTypes) => {

    const usuario = sequelize.define(
        'Usuario', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING(256),
        }, {
            tableName: "usuarios",
            timestamps: false
        }
    )

    usuario.associate = (models) => {
        usuario.hasMany(models.Post, { foreignKey: 'usuarios_id', as: 'posts' })
    }

    usuario.associate = (models) => {
        usuario.hasMany(models.Comentario, { foreignKey: 'usuarios_id', as: 'comentario' })
    }

    return usuario;

}