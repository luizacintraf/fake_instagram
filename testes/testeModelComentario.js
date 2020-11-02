const { sequelize, Comentario } = require('../models');

<<<<<<< HEAD
Comentario.findAll({
    include: 'autor',
}).then(
=======
Comentario.findAll({include:'autor'}).then(
>>>>>>> 880085fb2e11a882c4f294d452d22cdec3fc33ae
    data => {
        console.log(data.map(u => u.toJSON()));
        sequelize.close();
    }
)