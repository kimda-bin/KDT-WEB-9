const { User } = require('../models');
const bcrypt = require('bcrypt')


exports.main = (req, res) => {
    res.render('index')
}

//회원가입 페이지
exports.joinUser = (req, res) => {
    res.render('join')
}

//로그인 페이지
exports.loginUser = (req, res) => {
    res.render('login')
}

//회원가입 동작
exports.Joinus = async (req, res) => {
    const result = await User.create({
        userid: req.body.userid,
        name: req.body.name,
        pw: bcryptPassword(req.body.pw)
    })
    if (result) {
        res.json({ result: true })
    }

}

//로그인 동작
exports.Login = async (req, res) => {
    const { userid, pw } = req.body;
    const result = await User.findOne({
        where: { userid },
    });
    if (!result) {
        res.json({ result: false, message: '사용자가 존재하지 않습니다' });
    }
    const compare = comparePassword(pw, result.pw)
    if (compare) {
        res.json({ result: true })
    } else {
        res.json({ result: false })
    }
}

const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
};