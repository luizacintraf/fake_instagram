const { sequelize, Usuario } = require('../models');

<<<<<<< HEAD
Usuario.findByPk(1, {
    include: 'posts'
}).then(
    usuario => {
        console.log(usuario.toJSON());
=======
Usuario.findByPk(1,{include:'posts'}).then(
    usuario => {
        console.log(usuario.toJSON());


        // quantos likes tem o segundo post
        console.log(usuario.posts[1].n_likes);

>>>>>>> 880085fb2e11a882c4f294d452d22cdec3fc33ae
        sequelize.close();
    }
    
)