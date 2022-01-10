const express = require('express');
const session = require('express-session');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use (session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(cors({ "Access-Control-Allow-Origin": "*", }));
