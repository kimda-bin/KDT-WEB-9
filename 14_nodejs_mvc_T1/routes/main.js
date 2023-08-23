const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);



//회원 리스트 전체 조회
router.get('/userlist', controller.userlist)

//회원 정보 추가
router.get('/useradd', controller.useraddGet)

router.post('/useradd', controller.useraddPost)

module.exports = router;
