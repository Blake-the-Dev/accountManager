const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoConfig = require("../config/mongoConfig");
const userDetails = require("../models/userSchema");

router.post('/', async (req, res) => {
    const searchUser = await userDetails.findOne(
        {
            email: req.body.email
        }
    )

    if (searchUser) {
        const validatePass = await bcrypt.compare(req.body.password, searchUser.password)

        if (validatePass) {
            console.log("Login successful")
            res.send("Login Successful!")
        }
        else {
            console.log("Incorrect password")
            res.redirect('back');
        }
    }
    else {
        console.log("User not registered")
    }
});

module.exports = router;