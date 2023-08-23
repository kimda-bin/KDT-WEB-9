const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'dabeen',
    password: '',
    database: 'kdt9',
    port: 3306,
});

//회원가입 정보 데이터베이스 저장
const db_signup = (data, cb) => {
    const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}','${data.pw}','${data.name}')`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('db_signup', rows)
        cb()
    })
}


//로그인
const db_signin = (data, cb) => {
    const query = `SELECT * FROM user WHERE userid ='${data.userid}' AND pw='${data.pw}'`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('db_signin', rows)
        //select문의 쿼리문은 배열로 반환
        cb(rows)
    })
}

//회원정보 조회


//회원정보 수정
const db_userupdate = (data, cb) => {
    const query = `UPDATE user SET name='${data.name}', pw= '${data.pw}' WHERE id=${data.id}`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('db_userupdate', rows)
        cb()
    })
}

module.exports = {
    db_signin,
    db_signup,
    db_userupdate
}