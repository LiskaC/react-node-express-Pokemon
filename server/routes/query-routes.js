const express = require("express");
const router = express.Router();
const { sorted, oneMon, allPokeDeets } = require("./api-calls");

router.get('/search_number/:query', (req, res, next) => {
  const response = sorted(req.params.query);

  res.send(response)
});

// first pokemon search by name endpoint

router.get('/search_name/:query', (req, res, next) => {
  const response = oneMon(req.params.query);
  console.log("this is response", response);

  res.send(response)
});

// Type ahead endpoint
router.get('/search_string', (req, res, next) => {
  const response = allPokeDeets(151);

  //console.log("this is response", response);

  res.send(response)
})

module.exports = router;