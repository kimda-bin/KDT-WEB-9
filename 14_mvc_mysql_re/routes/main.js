const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

//-------회원가입-------
//회원가입 페이지 열기
router.get('/signup', controller.signup)
//데이터베이스에 회원정보 저장
router.post('/signup', controller.post_signup)

//-------로그인-------
//로그인 페이지 열기
router.get('/signin', controller.signin)
//로그인 하기
router.post('/signin', controller.post_signin)

//-------회원정보 수정-------
//회원정보 조회
router.get('/userinfo', controller.userinfo)
//회원정보 수정
router.patch('/userinfo', controller.userupdate)

module.exports = router;
