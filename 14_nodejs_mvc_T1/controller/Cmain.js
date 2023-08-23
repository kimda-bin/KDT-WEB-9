const userlist = require('../model/Model');

exports.main = (req, res) => {
    res.render('index');
};

exports.userlist = (req, res) => {
    console.log(req.query)
    res.render('userlist', { userlist })
}

exports.useraddGet = (req, res) => {
    res.render('useradd')
}

exports.useraddPost = (req, res) => {
    console.log(req.body)
    userlist.push(
        {
            id: userlist.length + 1,
            name: req.body.name,
            gender: req.body.gender,
            major: req.body.major
        }
    )
}