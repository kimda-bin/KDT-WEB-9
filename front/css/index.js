const express = require('express');
const app = express();
const PORT = 8000

app.set('view engine', 'ejs');
app.set('css', './css');

// app.get('/kdt9', (req, res) => {
//     // views 폴더 안 test 파일 읽기
//     // render() 뷰 엔진 렌더링
//     res.render('test', { name: "dabeen" })
// })

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})