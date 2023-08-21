const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

//view
app.set('view engine', 'ejs')
app.set('views', './views')

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//정적 파일 설정
app.use('/uploads', express.static(__dirname + '/uploads'))

//multer
const upload = multer({
    // 업로드할 파일을 저장할 경로를 지정
    dest: 'uploads/'
})
const uploadDetail = multer({
    // storage: 저장할 공간에 대한 정보
    // diskStroage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/')
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname)
            console.log('ext', ext);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }
})

//router
app.get('/', (req, res) => {
    res.render('index');
})

//싱글
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    console.log(req.file)
    console.log(req.body)
})

//멀티1
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
    console.log(req.files)
    console.log(req.body)
})

//멀티2
app.post('/upload/fields', uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]), (req, res) => {
    console.log(req.files)
    console.log(req.body)
})

//동적
app.post('/dynamicFile', uploadDetail.single('dynamic-file'), (req, res) => {
    console.log(req.file)
    res.send(req.file)
})

// -----------------------------------------------------------------

//T1
const uploadJoin = multer({
    // storage: 저장할 공간에 대한 정보
    // diskStroage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/')
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname)
            done(null, path.basename(file.originalname, ext) + req.body.user + ext);
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }
})


app.get('/T1', (req, res) => {
    res.render('T1')
})

app.post('/joinT1', uploadJoin.single('file'), (req, res) => {
    res.send(req.file)
})



// 리더님 코드
//multer세팅
// const uploadDetail = multer({
//     storage: multer.diskStorage({
//         destination(req, file, done) {
//             done(null, 'uploads/');
//         },
//         filename(req, file, done) {
//             console.log('filename: ', req.body);
//             const ext = path.extname(file.originalname);
//             done(null, req.body.userId + Date.now() + ext);
//         },
//     }),
//     limits: { fileSize: 10 * 1024 * 1024 },
// });

//router
// app.get('/', (req, res) => {
//     res.render('index');
// });
// app.post('/result', uploadDetail.single('profile'), (req, res) => {
//     res.render('result', {
//         userInfo: req.body,
//         profile: req.file.path,
//     });
// });

// -----------------------------------------------------------------

//server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})



// 