const express = require("express");
const app = express();
const path = require("path");
let data = {};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.post("/player_data", (req, res) => {
    data = req.body;    
    res.sendStatus(200);
})

app.get("/stats/:name", (req, res) => {
    const {name} = req.params;
    if (name in data) {
        res.render("stats", data);
    } else {
        res.send("does not exist");
    }
})

app.listen(80, () => {
    console.log("listening on 80");
})