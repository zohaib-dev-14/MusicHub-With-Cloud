const express = require('express')
const authRoutes = require('../controllers/auth.controller.js')
const validateRegister = require('../middlewares/validatereg.middleware.js')
const validateLoginMiddleware = require('../middlewares/validatelogin.middlewares.js')

const router = express.Router()

console.log("Auth Routes mein 2nd number pe ain gy")
router.post('/register',validateRegister.validateRegisterMiddleware, authRoutes.registerUser)
router.post('/login',validateLoginMiddleware.validateLoginMiddleware, authRoutes.loginUser)
router.post('/logout', authRoutes.logoutUser)


module.exports = router