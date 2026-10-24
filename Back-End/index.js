const express = require("express");
const app = express();
const cors = require("cors");

var username = "QuickBite";
var password = "12345";

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/login", (req, res) => {
  console.log(req.query.username);
  console.log(req.query.password);
  if (req.query.username === username && req.query.password === password) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.post("/login", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.password);
  if (req.body.username === username && req.body.password === password) {
    res.send(true);
    console.log("Login successfullt");
  } else {
    res.send(false);
    console.log("Login Failed");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}...`);
});

module.exports = app;
