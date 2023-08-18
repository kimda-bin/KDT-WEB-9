const express = require('express')
const controller = require('../controller/Cuser')
const router = express.Router();


//메인화면
router.get('/', controller.main)

//회원가입
router.get('/joinUs', controller.joinUser)
router.post('/joinUs', controller.Joinus)

//로그인
router.get('/login', controller.loginUser)
router.post('/login', controller.Login)

module.exports = router;