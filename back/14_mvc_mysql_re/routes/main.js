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
//get 조회 방식일때는 url을 query string 또는 파라미터 방식으로 지정
//query string 방식은 페이지 이동을 안하며 파라미터는 페이지를 이동(res.render)
//회원정보 조회
router.get('/userinfo/:number', controller.profile)
//회원정보 수정
router.patch('/userinfo/edit', controller.userupdate)

//예시) 회원 구매목록 -> 절대 접근불가 => 왜냐면 위에 :id 때문에
//router.get('/userinfo/buy', null)

module.exports = router;
