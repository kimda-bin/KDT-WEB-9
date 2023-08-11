const { Student, Classes, StudentProfile } = require('../models')

exports.main = (req, res) => {
    res.render('index')
}

//1:1
exports.post_student = async (req, res) => {
    try {
        const { userid, password, email, name, major } = req.body
        const user = await Student.create({
            userid,
            password,
            email,
            //테이블명 그대로 써줘야 함(모델 안에서 선언한 테이블 이름만 가져옴)
            studentProfile: {
                name,
                major
            }
        }, {
            //위에 모델에서 require 한 StudentProfile(실제 모델)
            include: StudentProfile
            //[{model:StudentProfile}] -> 위와 같음
        })
        console.log(user)
        res.send(user)
    } catch (error) {
        console.log(error)
    }
}


exports.post_class = async (req, res) => {
    try {
        const { name, room, code, teacher_name, studentId } = req.body
        const classes = await Classes.create({
            name,
            room,
            code,
            teacher_name,
            studentId
        })
        res.send(classes)
    } catch (error) {
        console.log(error)
    }
}


exports.get_student = async (req, res) => {
    try {
        //include: 쿼리를 실행할 때 관련된 모델의 데이터도 함께 조회할 수 있도록 하는 옵션
        const student = await Student.findAll({
            attributes: ['id', 'userid', 'email'],
            //데이터가 배열 안의 객체 형태로 가져오기때문에 원하는 값에만 접근하기 위해서는 밑과 같은 형식이 필요
            include: [{ model: StudentProfile, attributes: ['major', 'name'] }]
        })
        res.send(student)
    } catch (error) {
        console.log(error)
    }
}