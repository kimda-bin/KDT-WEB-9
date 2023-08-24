const model = require('../model/Model');

/////////////////////////////////////////
//GET

//메인페이지
const main = (req, res) => {
    res.render('index');
};

//회원가입 페이지
const signup = (req, res) => {
    res.render('signup')
}

//로그인 페이지
const signin = (req, res) => {
    res.render('signin')
}

//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params)
    console.log(req.query)
    model.db_profile(req.params, (result) => {
        res.render('userinfo', { data: result[0] })
    })
}

/////////////////////////////////////////
//POST

//회원가입
const post_signup = (req, res) => {
    model.db_signup(req.body, () => {
        res.json({ result: true })
    })
}

//로그인
const post_signin = (req, res) => {
    model.db_signin(req.body, (result) => {
        //result에 아이디, 비밀번호가 서로 일치하는 사용자 정보가 들어오므로 무조건 한명만 들어옴
        if (result.length > 0) {
            res.json({ result: true, data: result[0] })
        } else {
            res.json({ result: false })
        }
    })
}

/////////////////////////////////////////
//PATCH
//회원정보 수정
const userupdate = (req, res) => {
    model.db_userupdate(req.body, () => {
        res.json({ result: true })
    })
}

/////////////////////////////////////////

module.exports = {
    main,
    signup,
    signin,
    profile,
    post_signup,
    post_signin,
    userupdate
}
