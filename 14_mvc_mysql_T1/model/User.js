const mysql = require('mysql');

//mysql 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'dabeen',
    database: 'kdt9'

});

conn.connect((err) => {
    if (err) {
        console('error')
        return;
    }
    console.log('connect')
})

//회원가입
exports.postSingup = (data, callback) => {
    const query = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}','${data.name}','${data.pw}')`
    conn.query(query, (err, rows) => {
        console.log(rows)
        if (err) {
            console.log(err);
            return;
        }
        callback();
    })
}

//로그인
exports.postSingin = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid = '${data.userid}'`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        callback(rows);
    })
}
