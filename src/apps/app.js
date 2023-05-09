const config = require("config");
const express = require("express");
const app = express();

app.use(require(config.get("app.router")));
app.use("/static", express.static(config.get("app.static_folder")));

module.exports = app;
