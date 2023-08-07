const express = require('express');
const router = express.Router();
const controller = require('../controller/userController')

router.get('/', controller.main);

router.post('/user', controller.userInfo);


module.exports = router;