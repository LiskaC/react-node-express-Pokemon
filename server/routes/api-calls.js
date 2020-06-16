// this is just to check my server
const http = require('http');
const server = http.createServer((req, res) => {
  res.write('why hello there');
  res.end();
});

// getting stuck in to npm nerds
const nerds = require('nerds');


// this returns all the details for the Pokemon
const allPokeDeets = num => { return nerds.resolve('Pokemon', num).asArray(); };


// this returns a given number of Pokemon -> currently not in use
const somePokeDeets = num => {
  let result = nerds.resolve('Pokemon', num).include(['name', 'type', 'total']).asArray();
  return result;
};


// this sorts the returned array for any number of random Pokemon by AWESOMENESS
const sorted = num => {
  let pokeSlice = allPokeDeets(num).slice(0);
  return pokeSlice.sort((a, b) => b.total - a.total);
}

//this makes sure the string passed to the api has an uppercase first letter, so that the search bar input is not case sensitive
const uppercaseFirstLetter = str => {
  if (typeof str === "string") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } return null;
}


//this finds the index of a Pokemon in the database, when its name is input as the string
const oneMon = str => {
  let formattedStr = uppercaseFirstLetter(str);

  const result = allPokeDeets(151).filter(pokemon => {
    if (pokemon.name === formattedStr) {
      return true;
    }
  })
  if (result.length > 0) {

    return result;
  } else { return [] }
};

server.listen(3005);

module.exports = { sorted, oneMon, allPokeDeets }