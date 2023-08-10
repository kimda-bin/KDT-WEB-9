const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models')

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// const indexRouter = require('./routes');
// app.use('/', indexRouter)

//라우터----------------------------------------------

const visitorRouter = require('./routes/visitor');

app.get('/', (req, res) => {
    res.render('index');
})

//localhost:8000/visitor
app.use('/visitor', visitorRouter);

// //get /visitor: 방명록 전체 보이기
// app.get('/visitor', (req, res) => {
//     const query = 'SELECT * FROM visitor'
//     conn.query(query, (err, rows) => {
//         console.log(rows)
//         res.render('visitor', { data: rows })
//     })
// })

// //get /visitor/get : 방명록 하나 조회
// app.get('/visitor/get', (req, res) => {
//     const query = `SELECT * FROM visitor WHERE id = ${req.query.id}`
//     conn.query(query, (err, rows) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         res.render('visitor', { data: rows })
//     })
// })

// //post /visitor/wirte: 방명록 하나 생성
// app.post('/visitor/write', (req, res) => {
//     const query = `INSERT INTO visitor (name,comment) VALUES ('${req.body.name}','${req.body.comment}')`
//     conn.query(query, (err, rows) => {
//         console.log(rows)
//         res.send({ id: rows.insertId, name: req.body.name, comment: req.body.comment })
//     })
// })

// //patch /visitor/edit : 방명록 하나 수정
// app.patch('/visitor/edit', (req, res) => {
//     const query = `UPDATE visitor SET name='${req.body.name}', comment= '${req.body.comment}' WHERE id=${req.body.id}`
//     conn.query(query, (err, rows) => {
//         console.log('rows', rows)
//         if (err) {
//             console.log(err);
//             res.send({ result: false });
//             return;
//         }
//         res.send({ result: true });
//     })

// })

// //delete /visitor/delete : 방명록 하나 삭제
// app.delete('/visitor/delete', (req, res) => {
//     const query = `DELETE FROM visitor WHERE id=${req.body.id}`
//     conn.query(query, (err, rows) => {
//         if (err) {
//             console.log(err)
//             res.send({ result: false });
//             return;
//         }
//         res.send({ result: true });
//     })
// })

//라우터----------------------------------------------



app.use('*', (req, res) => {
    res.render('404');
})

//테이블이 없으면 자동으로 생성해줌(visitors)
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    });
})
