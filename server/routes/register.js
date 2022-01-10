const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

mongoConfig = require('../config/mongoConfig');

router.post ('/register', 
    [
        check('fname').notEmpty().withMessage('First name is required'),
        check('lname').notEmpty().withMessage('Last name is required'),
        check('email').notEmpty().withMessage('Email is required'),
        check('email').isEmail().withMessage('Email is invalid'),
        check('password').notEmpty().withMessage('Password is required'),
    ], (req, res) => 
    {
        const hashPass = bcrypt.hashSync(req.body.password, 10);

        const newUser = userDetails(
            {
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                password: hashPass
            });

            bcrypt.compare(req.body.comparePassword, hashPass, function (err, matches)
            {
                if(!matches)
                {
                    console.log("Password does not match");
                }
                else 
                {
                    console.log("Password matches");
                    res.send("User registered");
                    newUser.save();
                }
            })
    });

module.exports = router;