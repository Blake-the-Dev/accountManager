const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use (session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ "Access-Control-Allow-Origin": "*", }));


app.use(require('./routes/index'));



app.listen (8080, () => {
    console.log(`Server is running on port 8080`);
});