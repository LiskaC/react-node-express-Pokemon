const express = require("express");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./server/config/keys");
const chalk = require("chalk");
const { Strategy } = require("passport");
let user = {};


passport.serializeUser((user, done) => {
  done(null, user.id)
})


passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  })
})


passport.use(new GoogleStrategy({
  clientID: keys.GOOGLE.clientID,
  clientSecret: keys.GOOGLE.clientSecret,
  callbackURL: "/auth/google"
},
  (accessToken, refreshToken, profile, callback) => {
    console.log(chalk.blue(JSON.stringify(profile)));
    user = { ...profile };
    return callback(null, profile)
  }
))

const app = express();
app.use(cors());
app.use(passport.initialize());

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback", passport.authenticate(("google"),
  (req, res) => {
    res.redirect("/profile")
  }))

app.get("auth/logout", (req, res) => {
  console.log("logging out!");
  user = {};
  res.redirect("/");
})

const PORT = 8000;
app.listen(PORT);