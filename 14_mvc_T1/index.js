const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// views engine
app.set('view engine', 'ejs');
app.set('views', './views');

// router
const router = require('./routes')
app.use('/', router);


// server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});