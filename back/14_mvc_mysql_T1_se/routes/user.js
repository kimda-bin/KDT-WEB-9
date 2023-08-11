const express = require('express')
const controller = require('../controller/Cuser')
const router = express.Router();


router.get('/', controller.main)

router.get('/signup', controller.Signup)

router.post('/signupData', controller.userSignup)

router.get('/signin', controller.Signin)

router.post('/signinData', controller.userSignin)

router.post('/profile', controller.Profile)

router.patch('/edit', controller.editUser)

router.delete('/delete', controller.deleteUser)

router.get('/findall', controller.findall);


module.exports = router;