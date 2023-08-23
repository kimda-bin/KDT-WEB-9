const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

//임시 데이터
const userlist = [
    {
        id: 1,
        name: 'happy',
        gender: '여자',
        major: 'java'
    },
    {
        id: 2,
        name: 'good',
        gender: '남자',
        major: 'java'
    },
    {
        id: 3,
        name: 'lucky',
        gender: '여자',
        major: 'java'
    },
    {
        id: 4,
        name: 'hello',
        gender: '남자',
        major: 'java'
    },
    {
        id: 5,
        name: 'hi',
        gender: '여자',
        major: 'java'
    },

]

module.exports = userlist
