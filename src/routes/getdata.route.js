const express = require('express');
const authUserM = require('../middlewares/authuser.middleware.js');
const { getData } = require('../controllers/getdata.controller.js');

const router = express.Router()



router.get('/getdata', authUserM.authUser, getData)



module.exports = router