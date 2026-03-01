const express = require('express');
const roleMiddleware = require('../middlewares/role.middleware.js')
const authMiddleware = require('../middlewares/auth.middleware.js')
const controller = require('../controllers/music.controller.js')
const multer = require('multer')
const router = express.Router()

const upload = multer({
  storage: multer.memoryStorage()
})

router.post(
  "/create-music",
  authMiddleware,
  roleMiddleware.requireRole("artist"),
  upload.single('music'),
  controller.createMusic,
)

module.exports = router
