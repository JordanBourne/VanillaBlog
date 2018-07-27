const Database = require("../../db/database");

module.exports = function (req, res, next) {
    res.locals.template = "about/about";

    return next();
};
