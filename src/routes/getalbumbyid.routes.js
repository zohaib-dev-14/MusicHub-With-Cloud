const getAlbumByIDController = require('../controllers/getalbumbyid.controller.js');
const authUserMiddleware = require('../middlewares/authuser.middleware.js')
const express = require('express');
const router = express.Router()




router.get('/get-album/:id', authUserMiddleware.authUser, getAlbumByIDController.getAlbumByID)




module.exports = router