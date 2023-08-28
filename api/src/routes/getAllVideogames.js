
const { Router } = require('express');
require('dotenv').config();
const {infoTotal} = require('../controllers')

const router = Router();


router.get('/', async (req, res, next) => {
    let allVideogames = await infoTotal()
    try{
        res.send(allVideogames)
        return
    }
    catch(e){
        console.log(e)

    }
    
        
    }
)

module.exports = router;
