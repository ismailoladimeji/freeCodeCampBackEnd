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
  const mySecret = process.env["MESSAGE_STYLE"];
  let text = "Hello json";
  if (mySecret === "uppercase") {
    text = text.toUpperCase();
  }
  res.json({ message: text });
});

module.exports = app;
