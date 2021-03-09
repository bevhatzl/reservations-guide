const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const cors = require('cors');
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
let nodemailer = require('nodemailer');
const dotenv = require("dotenv");

dotenv.config();

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
router.use(cors())
process.env.SECRET_KEY = 'secret';

router.post('/api/register', (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({
        email: req.body.email
    })
    .then( response => {
        if (response) {
            res.status(400).json({ email: "Email already exists" });
            return res.send("Email already exists");
        }
        else {
            const today = new Date()
            const userData = {
                hotel_name: req.body.hotel_name,
                email: req.body.email,
                password: req.body.password,
                created: today
            }
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) throw err;
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json(user);
                })
                .catch(err => {
                    console.log(err);
                })
            })
        }
    })
})

router.post('/api/login', (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(response => {
            if (response) {
                if (bcrypt.compareSync(req.body.password, response.password)) {
                    const payload = {
                        _id: response._id,
                        hotel_name: response.hotel_name,
                        email: response.email
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        // 1 year in seconds
                        expiresIn: 31556926 
                    })
                    res.send(token)
                }
                else {
                    res.status(400).json({ error: "User does not exist" });
                }
            }
            else {
                res.status(400).json({ error: "User does not exist" });
            }
        })
        .catch(err => {
            res.send('error: ' + err);
        })
})

router.get('/api/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    User.findOne({
        _id: decoded._id
    })
        .then(response => {
            if (response) {
                res.json(response)
            }
            else {
                res.status(400).json({ error: "User does not exist" });
            }
        })
        .catch(err => {
            res.send('error: ' + err);
        })
})

router.get('/api/displayusers', (req, res) => {
    User.find()
        .then(response => {
            if (response) {
                res.json(response)
            }
            else {
                res.status(400).json({ error: "Users do not exist" });
            }
        })
        .catch(err => {
            res.send('error: ' + err);
        })
})


const transporter = nodemailer.createTransport({
    host: "mail.live.com", //replace with your email provider
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  
  // verifying the connection configuration
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages!");
    }
  });
  
router.post('/access', (req, res, next) => {
    var email = req.body.email
    var hotelName = req.body.hotelName
    var content = `email: ${email} \n hotelName: ${hotelName} `
  
    var mail = {
      from: `reservations guide`, 
      to: process.env.EMAIL, 
      subject: `Username request`,
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })

module.exports = router;
