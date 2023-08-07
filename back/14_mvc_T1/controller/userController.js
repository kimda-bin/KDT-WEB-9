const user = require('../model/userModel');

exports.main = (req, res) => {
    res.render('index')
};


exports.userInfo = (req, res) => {
    const id = user.user().id;
    const pw = user.user().pw;
    if (req.body.id == id && req.body.pw == pw) {
        res.send("true")
    } else {
        res.send("false")
    }
}

