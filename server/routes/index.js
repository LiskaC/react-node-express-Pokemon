const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { sorted, oneMon, allPokeDeets } = require("../simplest-app");

app.listen(port, () => console.log(`listening on port ${port}`));

/*app.get('/express_backend', (req, res) => {
  const data = sorted(5);

  res.send(data)
});
*/

//in response to frontend input request

app.get('/search_number/:query', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const response = sorted(req.params.query);

  res.send(response)
})

// first pokemon search by name endpoint
app.get('/search_name/:query', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const response = oneMon(req.params.query);
  console.log("this is response", response);

  res.send(response)
});

// Type ahead endpoint
app.get('/search_string', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const response = allPokeDeets(151);

  //console.log("this is response", response);

  res.send(response)
})