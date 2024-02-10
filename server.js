const express = require('express');
const bodyParser = require('body-parser');
const payment = require('./payment');

const app = express();
app.use(bodyParser.json());
app.listen(3000, () => {
    console.log('api run in port 3000')
})

app.use('/payments', payment);

app.get('/', (req, res) => {
    const toto = req.query.apikey
    res.send(toto);
})