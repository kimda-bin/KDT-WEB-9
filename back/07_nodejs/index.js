// 키값을 불러오는 것
// const { b } = require("./module");
// console.log(b)

const http = require('http');
const fs = require('fs');

// 요청, 응답
const server = http.createServer(function (req, res) {
    // // 요청하고 나서 번호
    // res.writeHead(200)

    // // 응답 본문 작성
    // res.write("<h1>hello world</h1>")

    // // 응답 본문 작성 후 응답 종료
    // res.end("<p>end</p>")

    // 파일전송
    try {
        const data = fs.readFileSync('./index.html')
        res.writeHead(200)
        res.end(data)
    } catch (error) {
        console.log(error)
        res.writeHead(404)
        res.end(error.message)
    }
});

server.listen(8000, function () {
    console.log('8000번 포트로 실행')
})