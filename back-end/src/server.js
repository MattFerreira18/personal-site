const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = 5000;

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }));

require('./controllers/index')(app);

app.listen(PORT, () => {
    console.log('The server is running');
});
