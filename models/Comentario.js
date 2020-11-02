module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD

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
=======
    
    const comentario = sequelize.define(
        'Comentario',
        {
            texto: DataTypes.TEXT,
            usuarios_id: DataTypes.INTEGER,
            posts_id: DataTypes.INTEGER
        },
        {
            tableName: 'comentarios',
            timestamps: false
        }
    );

    comentario.associate = (models) => {
        comentario.belongsTo(models.Usuario,{as:"autor",foreignKey:"usuarios_id"});
    }

    return comentario;

}

>>>>>>> 880085fb2e11a882c4f294d452d22cdec3fc33ae
