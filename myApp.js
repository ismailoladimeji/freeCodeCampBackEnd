let express = require("express");
let app = express();
require("dotenv").config();

// this send a file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// this append to the file a style file
app.use("/public", express.static(__dirname + "/public"));

// this send a json file
app.get("/json", (req, res) => {
  let message = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message.message = message.message.toUpperCase();
  }
  res.json(message);
});

module.exports = app;
