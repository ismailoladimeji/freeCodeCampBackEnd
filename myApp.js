let express = require("express");
let app = express();
require("dotenv").config();

// this send a file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
2;

// this append to the file a style file
app.use("/public", express.static(__dirname + "/public"));

// this send a json file
app.get("/json", (req, res) => {
  let response = "Hello json";
  let filter = process.env.MESSAGE_STYLE;
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = responde.toUpperCase();
  }
  res.json({ message: response });
});

module.exports = app;
