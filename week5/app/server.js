const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const week4 = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});
require('./week5/app/routes/auth.routes')(week4);
require('./week5/app/routes/user.routes')(week4);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});