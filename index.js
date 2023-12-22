const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

mongoose.connect()

app.use('/auth', require())
app.use('/posts', require())

app.get('/', (req, res) => {
    res.send('API is running!');
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});