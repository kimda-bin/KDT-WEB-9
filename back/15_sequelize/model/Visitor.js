// exports.getVisitors = () => {
//     return [
//         { id: 1, name: '홍길동', comment: '내가 왔다.' },
//         { id: 2, name: '이찬혁', comment: '으라차차' }
//     ];
// };

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

exports.getVisitors = (callback) => {
    const query = 'SELECT * FROM visitor'
    conn.query(query, (err, rows) => {
        console.log(rows)
        callback(rows);
    })
}

exports.getVisitor = (id, callback) => {
    const query = `SELECT * FROM visitor WHERE id = ${id}`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err)
            return
        }
        callback(rows)
    })
}

// 컨트롤러에서 전송한 req.body를 data로 받고 result를 받아서
exports.postVisitor = (data, callback) => {
    const query = `INSERT INTO visitor (name,comment) VALUES ('${data.name}','${data.comment}')`
    conn.query(query, (err, rows) => {
        console.log(rows)
        // callback(result)로 rows 정보를 전달한다
        callback(rows)
    })
}

exports.patchVisitor = (data, callback) => {
    const query = `UPDATE visitor SET name='${data.name}', comment= '${data.comment}' WHERE id=${data.id}`
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

exports.deleteVisitor = (data, callback) => {
    const query = `DELETE FROM visitor WHERE id=${data.id}`
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }
        callback();
    })
}