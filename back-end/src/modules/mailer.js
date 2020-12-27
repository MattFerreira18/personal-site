require('dotenv').config();
const nodemailer = require('nodemailer');
const path = require('path');
const host = process.env.HOST;
const port = process.env.PORT;
const user = process.env.USER;
const pass = process.env.PASS;
const hbs = require('nodemailer-express-handlebars');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
});

transport.use('compile', hbs({
    viewEngine: {
        defaultLayout: undefined,
        partialsDir: path.resolve('./src/views/mail/')
    },
    viewPath: path.resolve('./src/views/mail/'),
    extName: '.html',
}));

module.exports = transport;
