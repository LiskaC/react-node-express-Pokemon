const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/login', (req, res, next) => {
  //get req.params and get all parameters from frontend and respond with value (as res.json)
  res.send("this is the login")
})

router.get('/logout', (req, res, next) => {
  res.send("this is the logout")
})

router.get('/google', (req, res, next) => {
  //do with passport
  res.send("this is the google")
})

module.exports = router;