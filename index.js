const express = require("express");
const path = require("path");
const jbt = require("jbt-express");

const app = express();

jbt.init({app});

app.set("view engine", "jbt");
app.set("views", path.join(__dirname, 'views'));

app.use((req, res, next) => {
    if (req.method === "POST") {
        var data = "";
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            req.rawBody = data;
            req.body = JSON.parse(data);
            return next();
        });
    } else {
        return next();
    }
});

app.use(express.static(path.join(__dirname, 'views')));
app.use("/", require("./routes/routes"));

module.exports = app;
