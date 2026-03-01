const express = require('express');
const roleMiddleware = require('../middlewares/role.middleware.js')
const authMiddleware = require('../middlewares/auth.middleware.js')
const createMusic = require('../controllers/music.controller.js')


const router = express.Router()

router.post(
  "/create-album",
  authMiddleware,
  roleMiddleware.requireRole("artist"),
  createMusic.createAlbum
)






module.exports = router;