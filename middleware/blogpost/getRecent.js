const Database = require("../../db/database");

module.exports = function (req, res, next) {
    let db = new Database();

    if (!res.locals.options) {
        res.locals.options = {};
    }

    db.select({
        columns: ["*"],
        where: {
            true: true
        },
        table: "posts"
    }, (err, result) => {
        res.locals.options.recentPosts = result.rows.slice(0,5);

        return next();
    });
};
