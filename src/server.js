const express = require('express');
const path = require('path');

const app = express();
const PORT = 5500;

app
    .use(express.urlencoded({ extended: true }))
    .use(express.static('public'))
    .set('views', path.join(__dirname, '/views'))
    .set('view engine', 'ejs')

    .get('/', (req, res) => {
        return res.render('index.ejs');
    })
    .get('/redirect-github', (req, res) => {
        return res.render('redirect-github.ejs');
    })
    .get('/redirect-linkedin', (req, res) => {
        return res.render('redirect-linkedin.ejs');
    })
    .get('/redirect-email', (req, res) => {
        return res.render('redirect-email.ejs');
    });

app.listen(PORT, () => {
    console.log('the server is running');
});
