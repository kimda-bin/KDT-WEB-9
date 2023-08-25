const express = require('express')
const router = express.Router()
const controller = require('../controller/CUser')

//메인페이지
router.get('/', controller.main)

//회원가입
router.get('/signup', controller.signup)
router.post('/signup', controller.post_signup)

//로그인
router.get('/signin', controller.signin)
router.post('/signin', controller.post_signin)

//회원전체 리스트 페이지
router.get('/userlist', controller.userlist)

module.exports = router