const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models')

app.set('view engine', 'ejs');
// app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const UserRouter = require('./routes/user');

// app.get('/', (req, res) => {
//     res.render('index');
// })

app.use('/user', UserRouter);

app.use('*', (req, res) => {
    res.render('404');
})

//테이블이 없으면 자동으로 생성해줌(visitors)
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    });
})