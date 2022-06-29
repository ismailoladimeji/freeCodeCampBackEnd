let express = require('express');
let app = express();
require('dotenv').config()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html" )
})
app.use("/public", express.static(__dirname + "/public"))

app.get("/json", (req, res) => {
    let message = {"message":"Hello json"}
    if (process.env.MESSAGE_STYLE == "uppercase"){
    message = message.message.toUpperCase()
}
    res.json(message)
})


 module.exports = app;