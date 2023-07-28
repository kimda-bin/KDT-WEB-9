const express = require('express')
const app = express();

app.listen(8000, () => { console.log(`http://localhost:8000`) })

app.use(express.static('./public'))

app.set('view engine', 'ejs');
app.set('views', './javascript');

app.get('/T2', (req, res) => {
    res.render('230713_js_jquery_T1')
})