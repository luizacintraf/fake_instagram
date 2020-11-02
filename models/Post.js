<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {

    const post = sequelize.define(
        'Post', {
            // id: {
            //     type: DataTypes.INTEGER,
            //     primaryKey: true,
            //     autoIncrement: true
            // },
            texto: DataTypes.STRING,
            img: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.STRING,
        }, {
            tableName: "posts",
            timestamps: false
        }
    )

    post.associate = (models) => {
        post.belongsTo(models.Usuario, { foreignKey: 'usuarios_id', as: 'usuario' });
        post.belongsToMany(
            models.Usuario, {
                as: "curtiram",
                through: "curtidas",
                foreignKey: "posts_id",
                otherKey: "usuarios_id"
            }
        )
    }
    return post;

}
=======
// Criar a função que vai ser exportada
module.exports = (sequelize, DataTypes)=>{

    const post = sequelize.define(
        'Post',
        {
            texto: DataTypes.STRING(100),
            img: DataTypes.STRING(100),
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.INTEGER
        },
        {
            tableName: "posts",
            timestamps: false
        }
    );

    post.associate = (models) => {
        post.belongsTo(models.Usuario,{as:"usuario",foreignKey:'usuarios_id'});
        post.belongsToMany(
            models.Usuario,
            {
                as:"curtiram",
                through:"curtidas", // atraves
                foreignKey:"posts_id",
                otherKey: "usuarios_id"
            }
        );                                 
    }

    return post;

}

// post.curtiram
>>>>>>> 880085fb2e11a882c4f294d452d22cdec3fc33ae
