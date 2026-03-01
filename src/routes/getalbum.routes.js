const getAlbumData = require('../controllers/getalbum.controller.js');
const authUserMiddleware = require('../middlewares/authuser.middleware.js')
const express = require('express');
const router = express.Router()





router.get('/get-album', authUserMiddleware.authUser, getAlbumData.getAlbum)



module.exports = router