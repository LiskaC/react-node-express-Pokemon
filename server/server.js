require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const path = require("path");
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"] // <== this will be the URL of our React app (it will be running on port 3000)
  })
);

app.use(express.static(path.join(__dirname, '../build')));


app.get('/', (req, res) => {
  res.sendFile(path.join('../client/build/index.html'));  //going to the right place?
});


const queryRoutes = require("./routes/query-routes");
app.use("/", queryRoutes);

const authRoutes = require("./routes/auth-routes");
app.use("/auth", authRoutes); //can I use simply "/" with second param authRoutes and it's different from queryRoutes? 

module.exports = app;