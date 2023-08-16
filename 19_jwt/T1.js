
const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
const secret = 'l59sqgdQbBlXE7FmxlAFixlQYPTfqMOi'

const userInfo = {
    id: 'kdt9',
    pw: '1234',
    name: '홍길동'
}

app.get('/T1', (req, res) => {
    res.render('T1')
})

app.get('/T1_login', (req, res) => {
    res.render('T1_login')
})

app.get('/token', (req, res) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')
        try {
            const result = jwt.verify(token[1], secret)
            if (result.id === userInfo.id) {
                res.json({ result: true, name: userInfo.name })
            }
        } catch (error) {
            console.log(error)
            res.json({ result: false, message: '인증된 회원이 아닙니다' })
        }
    } else {
        res.redirect('T1_login')
    }
})

app.post('/T1_login', (req, res) => {
    try {
        const { id, pw } = req.body
        const { id: uId, pw: uPw } = userInfo
        if (id === uId && pw === uPw) {
            const token = jwt.sign({ id }, secret)
            res.json({ result: true, token })
        } else {
            res.json({ result: false, message: '로그인 정보가 올바르지 않습니다' })
        }
    } catch (error) {
        console.log(error)
    }
})


// app.post('/T1_login', (req, res) => {
//     const { id, pw } = req.body
//     const token = jwt.sign({ id }, secret)
//     // const auth = token.headers.authorization
//     res.send({ result: true, token })
// })

// app.post('/T1_setlogin', (req, res) => {
//     //     const { id, pw } = req.body
//     //     if (id === userInfo.id) {
//     //         console.log(id.headers.authorization)
//     //         const verifytoken = jwt.sign({ id }, secret)
//     //         const auth = verifytoken.headers.authorization
//     //         console.log('auth', auth)
//     //         const token = auth.split(" ")
//     //         console.log('token', token)
//     //         if (token[0] === 'Bearer') {
//     //             jwt.verify(token[1], secret, (err, decoded) => {
//     //                 if (err) {
//     //                     return res.status(403).send({ message: '검증실패' })
//     //                 }
//     //                 res.send(token[1])
//     //             })
//     //         } else {
//     //             res.send({ message: '잘못된 인증방식입니다' })
//     //         }
//     //     } else {
//     //         res.send({ message: '로그인에 실패하였습니다' })
//     //     }
//     
// })

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})