// express
const express = require('express') // express를 불러오고
// import express from 'express' => package.json에 입력해야하는 값을 입력하고 나서 사용가능
const app = express() // express 함수를 app에 넣고(사용하기 위함)
const PORT = 8000; // 포트번호 지정


// http 통신방식 -> get (대부분 페이지 열때는 get 한다. post해도 되고!)
// '/' -> 주소 뒤에 /를 붙여준다는 얘기(도메인)
app.get('/', (req, res) => {
    // 프론트에 send함 "hello express"
    // send -> 클라이언트에 응답데이터 보냄
    // res.send("hello express")

    // 객체 형태(json)로 데이터 보냄(key:value)
    res.send({ result: true, code: 1000, message: "회원가입 성공", data: { name: 'dabin' } });
})



// 서버를 열어줌
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})


// ---------------------------------------------------------------


// ejs
// set() -> 서버의 속성을 지정한다
// views에 있는 ejs 파일을 열라는 뜻
// app.set('view engine', 'ejs');
// app.set('views', './views');

// app.get('/kdt9', (req, res) => {
//     // views 폴더 안 test 파일 읽기
//     // render() 뷰 엔진 렌더링
//     res.render('test', { name: "dabeen" })
// })


// ---------------------------------------------------------------


// 정적인 파일 불러오기
app.use(express.static('./public'))


// ---------------------------------------------------------------

//실습(T1)
// app.set('view engine', 'ejs');
// app.set('views', './views');

// app.get('/kdt9', (req, res) => {
//     // views 폴더 안 T1 파일 읽기
//     // render() 뷰 엔진 렌더링
//     res.render('T1')
// })

//실습(T2)
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/kdt9', (req, res) => {
    // views 폴더 안 T2 파일 읽기
    // render() 뷰 엔진 렌더링
    res.render('T2')
})
