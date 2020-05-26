// this is just to check my server
const http = require('http');
const server = http.createServer((req, res) => {
  res.write('why hello there');
  res.end();
});

//this is just to test out node

const chalk = require('chalk');


// getting stuck in to npm nerds
const nerds = require('nerds');


// this returns all the details for the Pokemon
const allPokeDeets = num => { return nerds.resolve('Pokemon', num).asArray(); };


// this returns a given number of Pokemon
const somePokeDeets = num => {
  let result = nerds.resolve('Pokemon', num).include(['name', 'type', 'total']).asArray();
  return result;
};


// this sorts the returned array for any number of random Pokemon by AWESOMENESS
const sorted = num => {
  let pokeSlice = somePokeDeets(num).slice(0);
  return pokeSlice.sort((a, b) => b.total - a.total);
}


//this finds the index of a Pokemon in the database, when its name is input as the string
const oneMonIndex = str => {
  //this is to have a static array of objects to work on 
  // (otherwise the DB keeps scrambling responses and i returns a different pokemon each time it's called)
  console.log("oneMonIndex string", str);

  const result = allPokeDeets(151).filter(pokemon => {
    if (pokemon.name === str) {
      return true;
    }
  })
  if (result.length > 0) {

    return result;
  } else { return { "message": "Not found" } }
};

server.listen(3005);

module.exports = { sorted, oneMonIndex }