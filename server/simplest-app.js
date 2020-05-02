// this is just to check my server
const http = require('http');
const server = http.createServer((req, res) => {
  res.write('why hello there');
  res.end();
});

//this is just to test out node
console.log('hello node')

const chalk = require('chalk');

console.log(chalk.red('is it all it\'s chalked up to be? Let the Pokemon tests begin!'));

// getting stuck in to npm nerds
const nerds = require('nerds');


// this returns all the Pokemon
let allPokeDeets = (num) => { return nerds.resolve('Pokemon', num).asArray(); };
//console.log(allPokeDeets(1));


// this returns a given number of Pokemon
const somePokeDeets = (num) => {
  let result = nerds.resolve('Pokemon', num).include(['name', 'type', 'total']).asArray();
  return result;
 };
//console.log(somePokeDeets(1));


// this sorts the returned array for any number of random Pokemon by AWESOMENESS
let sorted = (num) => {
  let pokeSlice = somePokeDeets(num).slice(0);
  return pokeSlice.sort((a,b) => a.total - b.total);
}
console.log('Pokemon sorted by awesomeness:', sorted(5));


//this finds the index of a Pokemon in the database, when its name is input as the string
let oneMonIndex = (str) => { 
  //this is to have a static array of objects to work on 
  // (otherwise the DB keeps scrambling responses and i returns a different pokemon each time it's called)
  let fullPokeSlice = allPokeDeets(151).slice(0);
  let i = fullPokeSlice.map((e) => { return e.name; }).indexOf(str);
  let pokeObject = fullPokeSlice[i];

  console.log('These are the stats for ' + str + ':');
   return pokeObject;
};

console.log(oneMonIndex('Ponyta'));
server.listen(3000);
