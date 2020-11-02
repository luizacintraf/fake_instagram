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
    );

    usuario.associate = (models) => {
        usuario.hasMany(models.Post,{as:"posts",foreignKey:'usuarios_id'});
        usuario.belongsToMany(
            models.Post,
            {
                as:"curtiu",
                through:"curtidas", // atraves
                foreignKey:"usuarios_id",
                otherKey: "posts_id"
            }
        ); ; // Feito pelo professor depois da aula
    }

    usuario.associate = (models) => {
        usuario.hasMany(models.Post, { foreignKey: 'usuarios_id', as: 'posts' })
    }

    usuario.associate = (models) => {
        usuario.hasMany(models.Comentario, { foreignKey: 'usuarios_id', as: 'comentario' })
    }

    return usuario;
<<<<<<< HEAD

}
=======
    
}
>>>>>>> 880085fb2e11a882c4f294d452d22cdec3fc33ae
