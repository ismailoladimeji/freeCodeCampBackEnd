let express = require("express");
let app = express();
require("dotenv").config();

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
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

app.get(
  "/now",
  function (req, res, next) {
    const time = new Date().toString();
    req.time = time;
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

module.exports = app;
