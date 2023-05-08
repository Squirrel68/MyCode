const express = require("express");
const app = express();

app.use(require(`${__dirname}/../routers/web`));
app.use("/static", express.static(`${__dirname}/../public/style.css`));

module.exports = app;
