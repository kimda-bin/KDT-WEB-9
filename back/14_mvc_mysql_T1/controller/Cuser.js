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
    User.postSingin(req.body, (result) => {
        if (result.length > 0) {
            res.send({ result: true, data: result[0] });
        } else {
            res.send({ result: false, data: null });
        }
    })
}

//프로필
exports.Profile = (req, res) => {
    console.log(req.body)
    User.profile(req.body, (result) => {
        if (result.length > 0) {
            res.render('profile', { data: result[0] });
        }
    })
}

//프로필 수정
exports.editUser = (req, res) => {
    User.editUser(req.body, () => {
        res.send({ result: true });
    })
}


//프로필 삭제
exports.deleteUser = (req, res) => {
    User.deleteUser(req.body, () => {
        res.send({ result: true });
    })
}

