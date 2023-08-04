const express = require('express');
const app = express();
const POST = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//임시 데이터
const comments = [
    {
        id: 1,
        userId: 'helloworld',
        date: '2023-08-01',
        comment: '안녕하세요'
    },
    {
        id: 2,
        userId: 'happy',
        date: '2023-08-02',
        comment: '안녕'
    },
    {
        id: 3,
        userId: 'hello',
        date: '2023-08-03',
        comment: '반가워요'
    },
    {
        id: 4,
        userId: 'good',
        date: '2023-08-04',
        comment: '좋은하루'
    }
]

app.get('/', (req, res) => {
    res.render('index')
})

//GET / comments
app.get('/comments', (req, res) => {
    res.render('comments', { commentInfos: comments })
})

//GET / comment/:id
app.get('/comment/:id', (req, res) => {
    //console.log(req.params);
    //console.log(req.params.id);
    const commentId = req.params.id
    console.log(comments[commentId - 1])
    res.render('comment', { commentInfo: comments[commentId - 1] })
})

//* 맨 마지막에 선언
app.get('*', (req, res) => {
    res.render('404');
})

app.listen(POST, () => {
    console.log(`http://localhost:${POST}`)
})