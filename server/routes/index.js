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

app.get('/search_number/:query', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const response = sorted(req.params.query);

  res.send(response)
})

app.get('/search_name/:query', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const response = oneMonIndex(req.params.query);
  console.log("this is response", response);
  /* oneMonIndex(req.params.searchName).then(results => {
     console.log("response: ", results);
   })*/

  res.send(response)
});