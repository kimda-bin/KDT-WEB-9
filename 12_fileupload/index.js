const express = require('express');
const multer = require('multer')
const app = express();
const PORT = 8000;

//view
app.set('view engine', 'ejs')
app.set('views', './views')

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//multer
const upload = multer({
    // 업로드할 파일을 저장할 경로를 지정
    dest: 'uploads/'
})

//router
app.get('/', (req, res) => {
    res.render('index');
})

//싱글
app.post('/upload', upload.single('userfile'), (req, res) => {
    console.log(req.file)
    console.log(req.body)
})

//server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})