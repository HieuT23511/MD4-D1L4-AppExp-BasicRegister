const express = require('express');
const ejs = require('ejs');
const app = express();
const multer = require('multer');
const upload = multer();
const PORT = 5555;
//cau hinh views
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('register')
})
const arrayUser = [];
app.post('/user/register', upload.none(), (req, res) => {
    if (req.body.username && req.body.password) {
        const user = {
            username: req.body.username,
            password: req.body.password
        }
        arrayUser.push(user)
        res.render('success',{user:user})
    } else {
        res.render('error')
    }
})
app.listen(PORT, "localhost", () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})