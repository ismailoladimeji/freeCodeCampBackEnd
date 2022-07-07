let express = require("express");
let app = express();
require("dotenv").config();


app.use((req, res, next) => {
  console.log(`${req.method} ${rew.path} - ${req.ip}`);
  return next();
});
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
  if (mySecret == "uppercase") {
    res.json({ message: text.toUpperCase() });
  } else {
    res.json({ message: text });
  }
});

module.exports = app;
