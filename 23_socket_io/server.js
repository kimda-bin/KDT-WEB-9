const http = require('http')
const express = require('express')
const SocketIO = require('socket.io')

const app = express()
const PORT = 8000

//http 서버
const server = http.createServer(app)
//socket 서버
const io = SocketIO(server)


app.set('view engine', 'ejs')

//client.ejs
// app.get('/', (req, res) => {
//     res.render('client')
// })

//실습(T1.ejs)
// app.get('/', (req, res) => {
//     res.render('T1')
// })

//chat.ejs
// app.get('/', (req, res) => {
//     res.render('chat')
// })

//실습2(T2.ejs)
app.get('/', (req, res) => {
    res.render('T2')
})


io.on('connection', (socket) => {
    //////////////////client//////////////////
    //클라이언트에서 전송한 이벤트를 받음
    // socket.on('open_message', (arg, cb) => {
    //     console.log(arg)
    //     cb(arg)
    // })

    // socket.on('form_message', (arg) => {
    //     console.log(arg)
    //     //전체에 보낼때
    //     //io.emit('backend_message', arg)
    //     //현재 접속한 클라이언트에게 보낼때
    //     socket.emit('backend_message', arg)
    // })


    //////////////////T1//////////////////
    // socket.on('hello', (arg) => {
    //     console.log(`client: ${arg.name}`)
    //     socket.emit('backend_arg', arg)
    // })
    // socket.on('study', (arg) => {
    //     console.log(`client: ${arg.name}`)
    //     socket.emit('backend_arg', arg)
    // })
    // socket.on('bye', (arg) => {
    //     console.log(`client: ${arg.name}`)
    //     socket.emit('backend_arg', arg)
    // })


    //////////////////chat+T2//////////////////
    //socket이 만들어지는 순간 고유한 아이디가 생성된다
    //밑의 콘솔 socket.rooms -> 현재 클라이언트 아이디
    // console.log('조인 전', socket.rooms)
    const user = socket.rooms
    console.log(user)
    socket.on('join', (res) => {
        //채팅방을 생성하는 방법은 join(방 아이디)사용. 방이 이미 존재하면 그 방으로 접속
        socket.join(res)
        socket.room = res

        //밑의 콘솔 socket.rooms -> 현재 클라이언트 아이디 + 방 아이디(객체 형태)
        console.log('조인 후', socket.rooms)

        //broadcast는 나를 제외한 전체사용자(브라우저)에게 메세지 전달
        socket.broadcast.to(res).emit('create', '새로운 브라우저가 입장하였습니다')

        //현재 해당하는 방에 접속한 클라이언트의 수 
        const roomInfo = io.sockets.adapter.rooms.get(res).size

        //현재 접속자 수
        console.log(roomInfo)
    })

    socket.on('message', (res) => {
        //io.to(특정 방 아이디).emit(이벤트) -> 특정 방의 전체 사용자들에게 메세지 전달
        console.log(user)
        io.to(socket.room).emit('chat', { data: res, name: user })
    })

    // socket.on('leave', () => {
    //     //현재 접속한 방에서 나가기
    //     socket.leave(socket.room)
    // })

    //////////////////T2//////////////////
    // socket.join('join', (res) => {
    //     socket.join(res)
    //     socket.room = res
    // })

    // socket.on('message', (res) => {
    //     io.to(socket.room).emit('chat', res)
    // })

})

//서버 
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})