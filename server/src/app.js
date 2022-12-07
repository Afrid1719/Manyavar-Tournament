const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const app = express();

const apiV1 = require('./routes/api');

app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_KEY],
    maxAge: 24*60*60*1000, // 24 hours
    path: '/',
    httpOnly: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(morgan('combined'));
app.use(helmet());
app.use('/v1', apiV1);

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });

module.exports = app;