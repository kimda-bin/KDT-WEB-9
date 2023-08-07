const express = require('express');
const app = express();
const POST = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require('./routes')
//localhost:8000/coments
app.use('/', router);
//예시
//const userRouter = require('./routes/user');
//localhost:8000/user/coments
//ap..use('/user',userRouter)


//* 맨 마지막에 선언
app.use('*', (req, res) => {
    res.render('404');
})


app.listen(POST, () => {
    console.log(`http://localhost:${POST}`)
})