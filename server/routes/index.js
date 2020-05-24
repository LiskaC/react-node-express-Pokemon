const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { sorted, oneMonIndex } = require("../simplest-app");

app.listen(port, () => console.log(`listening on port ${port}`));

/*app.get('/express_backend', (req, res) => {
  const data = sorted(5);

  res.send(data)
});
*/

//in response to frontend input request

app.get('/express_backend/:searchNumber', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const response = sorted(req.params.searchNumber);

  res.send(response)
})

app.get('/express_backend/:searchName', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const response = oneMonIndex(req.params.searchName);

  res.send(response)
})