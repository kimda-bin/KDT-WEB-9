const models = require('../models');
const bcrypt = require('bcrypt')
const { Op } = require('sequelize')

let saltNumber = 10;

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
exports.Joinus = (req, res) => {
    models.User.create({
        userid: req.body.id,
        name: req.body.name,
        pw: bcrypt.hashSync(req.body.pw, saltNumber)
    }).then(() => {
        res.send({ result: true })
    })
}

//로그인 동작
exports.Login = (req, res) => {
    models.User.findOne({
        where: {
            userid: req.body.id,
            pw: bcrypt.hashSync(req.body.pw, saltNumber)
        }
    }).then(() => {
        res.send({ result: true })
    })
}