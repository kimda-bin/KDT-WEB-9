const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
    res.render('index')
}

exports.getVisitors = (req, res) => {
    Visitor.getVisitors((rows) => {
        res.render('visitor', { data: rows })
    });
}

exports.getVisitor = (req, res) => {
    Visitor.getVisitor(req.query.id, (result) => {
        res.render('visitor', { data: result })
    })
}

exports.postVisitor = (req, res) => {
    // 모델의 postVisitor로 req.body와 콜백함수 인자값 result를 전송한다 
    // () => {} 이게 콜백 함수 형태
    Visitor.postVisitor(req.body, (result) => {

        // callback 함수를 이용하여 받은 result의 값을 이용하여 id를 변경한다(result.insertId)
        res.send({ id: result.insertId, name: req.body.name, comment: req.body.comment })
    })
}

exports.patchVisitor = (req, res) => {
    // 콜백 함수에 전달할 값 없음
    Visitor.patchVisitor(req.body, () => {
        res.send({ result: true });
    })
}

exports.deleteVisitor = (req, res) => {
    Visitor.deleteVisitor(req.body, () => {
        res.send({ result: true });
    })
}