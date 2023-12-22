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

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/auth', require('./routes/authRoutes'))
app.use('/posts', require('./routes/postRoutes'))

app.get('/', (req, res) => {
    res.send('API is running!');
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});