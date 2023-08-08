const User = require('../model/User');

exports.main = (req, res) => {
    res.render('index')
}

//회원가입 페이지
exports.Signup = (req, res) => {
    res.render('signup')
}

//회원가입 동작
exports.userSignup = (req, res) => {
    User.postSingup(req.body, () => {
        res.send({ result: true });
    })
}

//로그인 페이지
exports.Signin = (req, res) => {
    res.render('signin')
}

//로그인 동작
exports.userSignin = (req, res) => {
    User.postSingin(req.body, (data) => {
        res.send(data)
    })
}

//마이페이지
exports.Profile = (req, res) => {
    console.log('userInfo', req.body)
    res.render('profile', {
        userInfo: req.body
    })
}
