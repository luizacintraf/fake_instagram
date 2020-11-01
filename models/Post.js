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