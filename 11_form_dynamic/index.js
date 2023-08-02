const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// views engine
app.set('view engine', 'ejs');
app.set('views', './views');

// router
app.get('/', (req, res) => {
    res.render('index')
});
// --------------------------------------------------------------------
// ajax
// 2. index.ejs의 ajax에서 보낸 데이터가 req.query에 담기고
app.get('/ajax', (req, res) => {
    console.log('back', req.query)
    // 3. req.query값을 다시 ajax로 보낸다
    res.send(req.query)
})

app.post('/ajax', (req, res) => {
    console.log('back', req.body)
    res.send(req.body)
})


// axios
// 2.  index.ejs의 axios에서 보낸 데이터가 req.query에 담기고
app.get('/axios', (req, res) => {
    console.log('back', req.query)
    // 3. req.query값을 다시 axios로 보낸다
    res.send(req.query)
})

app.post('/axios', (req, res) => {
    console.log('back', req.body)
    res.send(req.body)
})


// fetch
app.get('/fetch', (req, res) => {
    console.log('back', req.query)
    res.send(req.query)
})

app.post('/fetch', (req, res) => {
    console.log('back', req.body)
    res.send(req.body)
})

// --------------------------------------------------------------------

// T1
app.get('/T1', (req, res) => {
    res.render('T1')
});

app.get('/register_result', (req, res) => {
    console.log('back', req.query)
    res.send(req.query)
})

// 리더님 풀이
// app.get('/axiosGet', (req, res) => {
//     res.render('get');
// });
// app.get('/resultGet', (req, res) => {
//     res.send({ result: true, data: req.query });
// });


// T2
app.get('/T2', (req, res) => {
    res.render('T2')
});

app.post('/login_result', (req, res) => {
    console.log('back', req.body)
    const id = 1234
    const pw = 1234
    if (req.body.id == id && req.body.pw == pw) {
        res.send("true")
    } else {
        res.send("false")
    }
})

// 리더님 풀이
// app.get('/axiosPost', (req, res) => {
//     res.render('post');
// });
// app.post('/resultPost', (req, res) => {
//     const id = 'kdt9';
//     const pw = '1234';
//     if (id === req.body.username && pw === req.body.password) {
//         res.send({ result: true, userInfo: req.body });
//     } else {
//         res.send({ result: false, userInfo: null });
//     }
// });


// --------------------------------------------------------------------

// server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});