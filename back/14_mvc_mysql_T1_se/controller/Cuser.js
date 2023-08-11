// const User = require('../models/User');
const models = require('../models');
const { Op } = require('sequelize')

exports.main = (req, res) => {
    res.render('index')
}

//회원가입 페이지
exports.Signup = (req, res) => {
    res.render('signup')
}

//회원가입 동작
exports.userSignup = (req, res) => {
    // User.postSingup(req.body, () => {
    //     res.send({ result: true });
    // })
    models.User.create({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw
    }).then(() => {
        res.send({ result: true });
    })
}

//로그인 페이지
exports.Signin = (req, res) => {
    res.render('signin')
}

//로그인 동작
exports.userSignin = (req, res) => {
    // User.postSingin(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.send({ result: true, data: result[0] });
    //     } else {
    //         res.send({ result: false, data: null });
    //     }
    // })
    const { userid, pw } = req.body
    models.User.findOne({
        //key와 value값이 같다면 생략 가능
        where: { userid, pw }
    }).then((data) => {
        res.send({ result: true, data });
    })
}

//프로필
exports.Profile = (req, res) => {
    // console.log(req.body)
    // User.profile(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.render('profile', { data: result[0] });
    //     }
    // })

    models.User.findOne({
        where: { userid: req.body.userid }
    }).then((data) => {
        res.render('profile', { data });
    })
}

//프로필 수정
exports.editUser = (req, res) => {
    // User.editUser(req.body, () => {
    //     res.send({ result: true });
    // })
    models.User.update(
        {
            name: req.body.name,
            pw: req.body.pw
        },
        {
            where: { id: req.body.id }
        }
    ).then(() => {
        res.send({ result: true });
    })
}


//프로필 삭제
exports.deleteUser = (req, res) => {
    // User.deleteUser(req.body, () => {
    //     res.send({ result: true });
    // })
    models.User.destroy({
        where: { id: req.body.id }
    }).then(() => {
        res.send({ result: true });
    })
}

exports.findall = (req, res) => {
    models.User.findAll({
        //attributes 원하는 컬럼 조회
        //attributes: ['name', 'userid'],
        //Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.ne(같지않은)
        //Op.or(또는), Op.in(배열 요소중 하나), Op.notIn(배열요소와 모두다름)
        //where: { id: { [Op.gt]: 2 } },
        order: [['id', 'DESC']],
        limit: 1,
        offset: 1,
    }).then((result) => {
        console.log('findAll', result);
        res.send(result);
    });
};

