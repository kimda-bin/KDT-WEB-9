const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.main);

router.get('/visitor', controller.getVisitors);

app.get('/', (req, res) => {
    res.render('index');
})

//get /visitor: 방명록 전체 보이기
app.get('/visitor', (req, res) => {
    const query = 'SELECT * FROM visitor'
    conn.query(query, (err, rows) => {
        console.log(rows)
        res.render('visitor', { data: rows })
    })
})

//get /visitor/get : 방명록 하나 조회
app.get('/visitor/get', (req, res) => {
    const query = `SELECT * FROM visitor WHERE id = ${req.query.id}`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err)
            return
        }
        res.render('visitor', { data: rows })
    })
})

//post /visitor/wirte: 방명록 하나 생성
app.post('/visitor/write', (req, res) => {
    const query = `INSERT INTO visitor (name,comment) VALUES ('${req.body.name}','${req.body.comment}')`
    conn.query(query, (err, rows) => {
        console.log(rows)
        res.send({ id: rows.insertId, name: req.body.name, comment: req.body.comment })
    })
})

//patch /visitor/edit : 방명록 하나 수정
app.patch('/visitor/edit', (req, res) => {
    const query = `UPDATE visitor SET name='${req.body.name}', comment= '${req.body.comment}' WHERE id=${req.body.id}`
    conn.query(query, (err, rows) => {
        console.log('rows', rows)
        if (err) {
            console.log(err);
            res.send({ result: false });
            return;
        }
        res.send({ result: true });
    })

})

//delete /visitor/delete : 방명록 하나 삭제
app.delete('/visitor/delete', (req, res) => {
    const query = `DELETE FROM visitor WHERE id=${req.body.id}`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err)
            res.send({ result: false });
            return;
        }
        res.send({ result: true });
    })
})


module.exports = router;