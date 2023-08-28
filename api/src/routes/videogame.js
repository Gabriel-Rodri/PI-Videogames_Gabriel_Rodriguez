const { Router } = require('express');
require('dotenv').config();
const { videogame } = require('../controllers')


const router = Router();

router.get('/:idVideogame', async (req, res, next) => {
    const {idVideogame} = req.params //el id me llega por params
    let data = await videogame(idVideogame)

    try {
        data ? res.send(data) : res.status(404).send('El id ingresado no coincide con un videojuego en particular')

    } catch(e) {
        next(e)
    }
})






module.exports = router;












// {
//     "name": "lola",
//     "image": "https://www.trecebits.com/wp-content/uploads/2019/04/11854.jpg",
//     "released": "2019-08-18",
//     "rating": "2",
//     "platforms": "pes",
//     "description": "hola mundo",
//     "genres": ["Action", "RPG"]
// }