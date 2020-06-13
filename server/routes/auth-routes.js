const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/login', (req, res, next) => {
  res.render("this is the login") // not working waaaaaaah
})

router.get('/logout', (req, res, next) => {
  res.send("this is the logout")
})

router.get('/google', (req, res, next) => {
  //do with passport
  res.send("this is the google")
})

module.exports = router;