const { User } = require('../models')

const cookieConfig = {
    httpOnly: true,
}

//get
//메인페이지
const main = (req, res) => {
    res.render('index')
}

//회원가입페이지
const signup = (req, res) => {
    res.cookie('userCookie', 'signup', cookieConfig)
    res.render('signup')
}

//로그인페이지
const signin = (req, res) => {
    res.render('signin')
}

//회원전체 리스트 페이지
const userlist = (req, res) => {
    if (!req.session.userInfo) {
        res.render('signin', { message: '로그인이 필요합니다' })
    }
    res.render('userlist')
}

//post
//회원가입
const post_signup = (req, res) => {
    const { userid, name, pw } = req.body
    User.create({ userid, name, pw }).then(() => {
        res.json({ result: true })
    })
}

//로그인
const post_signin = (req, res) => {
    const { userid, pw } = req.body
    const user = User.findOne({
        where: { userid }
    })

    if (user) {
        if (user.pw == pw) {
            req.session.userInfo = { name: user.name }
            res.json({ result: true, data: user })
        } else {
            res.json({ result: false, message: '로그인 실패' })
        }
    } else {
        res.json({ result: false, message: '없는 사용자입니다' })
    }
}

module.exports = {
    main,
    signin,
    signup,
    userlist,
    post_signin,
    post_signup
}