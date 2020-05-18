const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { sorted, oneMonIndex } = require("../simplest-app");

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/express_backend', (req, res) => {
  const data = sorted(5);

  res.send(data)
});