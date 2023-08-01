const express = require('express')
const app = express()
const PORT = 8000

// body-parser(미들웨어-> 항상 위에 있어야 함)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set('views', './views');

// router
app.get('/', (req, res) => {
    // console.log(req.body)
    res.render('index', { title: '폼 전송 실습' })
})


// req: 요청받음 res: 전송함
app.get('/getForm', (req, res) => {
    console.log(req.query)
    res.render('result', {
        title: 'GET요청 폼 결과 확인하기',
        userInfo: req.query
    });
})

app.post('/postForm', (req, res) => {
    console.log(req.body)
    res.render('result', {
        title: 'POST요청 폼 결과 확인하기',
        userInfo: req.body
    })
})

// T1
app.get('/T1', (req, res) => {
    // console.log(req.body)
    res.render('T1')
})

app.get('/getData', (req, res) => {
    console.log(req.query)
    res.render('result_T', {
        title: 'GET요청 폼 결과 확인하기',
        userInfo: req.query
    })
})

// T2
app.get('/T2', (req, res) => {
    // console.log(req.body)
    res.render('T2')
})

app.post('/getPostData', (req, res) => {
    console.log(req.body)
    res.render('result_T', {
        title: 'POST요청 폼 결과 확인하기',
        userInfo: req.body
    })
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})




