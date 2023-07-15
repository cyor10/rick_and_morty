const express = require('express')
const router = express.Router()

const getCharById = require('../controllers/characters.js')
const login = require('../controllers/loginDos.js')
//const { postFav, deleteFav } = require('../controllers/handleFavorites.js')
const postFav = require('../controllers/postFav.js')
const postUser = require('../controllers/postUser.js')
const deleteFav = require('../controllers/postFav.js')

router.get('/login', login)
router.post('/login', postUser)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

router.get('/character/:id', getCharById)

module.exports = router;