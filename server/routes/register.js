const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoConfig = require("../config/mongoConfig");
const userDetails = require("../models/userSchema");

router.post ('/', 
    [
        check('fname').notEmpty().withMessage('First name is required'),
        check('lname').notEmpty().withMessage('Last name is required'),
        check('email').notEmpty().withMessage('Email is required'),
        check('email').isEmail().withMessage('Email is invalid'),
        check('password').notEmpty().withMessage('Password is required')
    ], (req, res) => 
    {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const hashPass = bcrypt.hashSync(req.body.password, 10);

        const newUser = userDetails(
            {
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                password: hashPass
            });

        bcrypt.compare(req.body.confirmPassword, hashPass, function (err, matches)
            {
                if(!matches)
                {
                    console.log("Passwords do not match");
                }
                else 
                {
                    console.log("User registered");
                    res.send("User registered");
                    newUser.save();
                }
            })
    });

module.exports = router;