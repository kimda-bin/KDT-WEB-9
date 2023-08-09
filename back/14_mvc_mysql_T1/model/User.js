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
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        callback(rows);
    })
}

//프로필
exports.profile = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid = '${data.userid}'`
    conn.query(query, (err, rows) => {
        console.log('post_profile', rows);
        callback(rows);
    });
}

//프로필 수정
exports.editUser = (data, callback) => {
    const query = `UPDATE user SET name='${data.name}', pw= '${data.pw}' WHERE id=${data.id}`
    conn.query(query, (err, rows) => {
        console.log('rows', rows)
        if (err) {
            console.log(err);
            return;
        }
        // 콜백 함수로 전달된 값이 없으니까 그냥 부르기만 하면 된다
        callback();
    })
}

//프로필 삭제
exports.deleteUser = (data, callback) => {
    const query = `DELETE FROM user WHERE id=${data.id}`
    conn.query(query, (err, rows) => {
        console.log('rows', rows)
        if (err) {
            console.log(err);
            return;
        }
        // 콜백 함수로 전달된 값이 없으니까 그냥 부르기만 하면 된다
        callback();
    })
}
