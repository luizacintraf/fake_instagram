module.exports = (sequelize, DataTypes) => {

    const comentarios = sequelize.define(
        'Comentario', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            usuarios_id: DataTypes.INTEGER,
            posts_id: DataTypes.INTEGER,
            texto: DataTypes.TEXT,
        }, {
            tableName: "comentarios",
            timestamps: false
        }
    )

    comentarios.associate = (models) => {
        comentarios.belongsTo(models.Usuario, { foreignKey: 'usuarios_id', as: 'autor' })
    }

    return comentarios;

}