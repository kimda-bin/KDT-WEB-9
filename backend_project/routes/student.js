const express = require('express')
const controller = require('../controller/Cstudent')
const router = express.Router()

router.get('/', controller.main)


module.exports = router