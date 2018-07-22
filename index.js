const express = require("express");
const path = require("path");
const jbt = require("jbt-express");

const app = express();
jbt.init({app});

app.set("view engine", "jbt");
app.set("views", "./views");

app.use(express.static(path.join(__dirname, 'views')));
app.use("/", require("./routes/routes"));


module.exports = app;
