require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const index = require("./routes/index");
app.use("/", index);

module.exports = app;