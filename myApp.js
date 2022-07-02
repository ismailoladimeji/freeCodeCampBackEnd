let express = require("express");
let app = express();
require("dotenv").config();
const secret = process.env[MESSAGE_STYLE];

// this send a file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
2;

// this append to the file a style file
app.use("/public", express.static(__dirname + "/public"));

// this send a json file
app.get("/json", (req, res) => {
  let data = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE === "uppercase") {
    data.message = data.message.toUpperCase();
  }
  res.json(data);
});

module.exports = app;
