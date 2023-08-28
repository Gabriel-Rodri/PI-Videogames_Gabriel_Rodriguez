const { Router } = require("express");
const getAllVideogamesRoute = require("./getAllVideogames.js")
const genresRoute = require('./genres.js')
const videogameRoute = require('./videogame.js')
const createVideogameRoute = require('./PostVideogame.js')
const getVideogameName = require('./getNameVideogame.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/genres', genresRoute)
router.use('/videogames', getAllVideogamesRoute);
router.use('/videogame', videogameRoute)
router.use('/create', createVideogameRoute)
router.use('/videogames/filt', getVideogameName)





module.exports = router;
