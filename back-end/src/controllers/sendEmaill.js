const express = require('express');
const mailer = require('../modules/mailer');

const router = express.Router();

router.post('/send_email', async (req, res) => {
    try {

        const { email, people, subject } = req.body;

        mailer.sendMail({
            to: email,
            from: 'matheusgustomf@gmail.com',
            template: 'contact',
            context: { people, subject },
        }, (err) => {
            if (err) { return res.status(400).send({ error: 'Cannot send contact us email' }) };
        })

    } catch (err) {
        res.status(400).send({ error: 'Error on contact us, try again' });
    };
});
