#! /usr/local/bin/node
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pokemonusers', { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });;
// or 'mongodb://localhost:27017/pokemonusers'

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.on("disconnected", () => {
  console.log("mongoose is disconnected");
})
//do I need to 'export' the stuff above this? how does the rest of the program use this?

console.log(process.argv); //what is process.argv?

/*

do I need to use db for db.once("open", () => {

  var citySchema = new mongoose.Schema({
    name: String,
    population: Number
  }); 
  ? 
  
  */


module.exports = db;