const express = require('express');
const app = express();
const PORT = 8000;
const mysql = require('mysql');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mysql 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'dabeen',
    database: 'kdt9'

});

conn.connect((err) => {
    if (err) {
        console('error')
        return;
    }
    console.log('connect')
})

// const indexRouter = require('./routes');
// app.use('/', indexRouter)

//라우터----------------------------------------------

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
    res.send('방명록 하나 수정')
})

//delete /visitor/delete : 방명록 하나 삭제
app.delete('/visitor/delete', (req, res) => {
    res.send('방명록 하나 삭제')
})

//라우터----------------------------------------------



app.use('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});