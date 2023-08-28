const { User } = require('../models')
const bcrypt = require('bcrypt');

const cookieConfig = {
    httpOnly: true,
}

//get
//메인페이지
const main = (req, res) => {
    console.log(req.cookies.userCookie)
    if (req.cookies.userCookie) {
        res.render('index', { result: true })
    } else {
        res.render('index', { result: false })
    }

}

//회원가입페이지
const signup = (req, res) => {
    res.render('signup')
}

//로그인페이지
const signin = (req, res) => {
    res.render('signin')
}

//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });
    //findOne은 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체반환
    //where: 는 객체형태로 찾을 정보를 입력
    User.findOne({
        where: { id: req.params.number },
    }).then((result) => {
        res.render('profile', { data: result });
    });
};

//회원전체 리스트 페이지
const userlist = (req, res) => {
    if (!req.session.userInfo) {
        res.render('signin', { message: '로그인이 필요합니다' })
    }
    res.render('userlist')
}

//post
//회원가입
const post_signup = async (req, res) => {
    const { userid, name, pw } = req.body
    const hash = await bcryptPassword(pw);
    User.create({ userid, name, pw: hash }).then(() => {
        res.json({ result: true })
    })
}

//로그인
const post_signin = async (req, res) => {
    const { userid, pw } = req.body
    const user = User.findOne({
        where: { userid }
    })

    if (user) {
        const result = await compareFunc(pw, user.pw);
        if (result) {
            req.session.userInfo = { name: user.name, id: user.id }
            res.cookie('userCookie', true)
            res.json({ result: true, data: user })
        } else {
            res.json({ result: false, message: '로그인 실패' })
        }
    } else {
        res.json({ result: false, message: '없는 사용자입니다' })
    }
}

//patch
const edit_profile = (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    //update ( 수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력 )
    const { name, pw, id } = req.body;
    User.update({ name, pw }, { where: { id } }).then(() => {
        res.json({ result: true });
    });
};

//DELETE
//회원탈퇴 destroy()
const destroy = (req, res) => {
    const { id } = req.body;
    User.destroy({
        where: { id },
    }).then(() => {
        //쿠키삭제
        //res.clearCookie(쿠키이름)
        res.clearCookie('isLogin');
        //세션삭제
        req.session.destroy();
        res.json({ result: true });
    });
};

module.exports = {
    main,
    signin,
    signup,
    userlist,
    post_signin,
    post_signup,
    edit_profile,
    profile,
    destroy
}

//암호화
const bcryptPassword = (password) => bcrypt.hash(password, 11);
//비교
const compareFunc = (password, dbpass) => bcrypt.compare(password, dbpass);
