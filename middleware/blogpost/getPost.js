const Database = require("../../db/database");

module.exports = function (req, res, next) {
    let db = new Database();

    db.select({
        columns: ["*"],
        where: {
            link: req.params.postLink
        },
        table: "posts"
    }, (err, result) => {
        res.locals.template = "post/blog";
        res.locals.options = {
            blogPost: result.rows[0],
            recentPosts: undefined
        };

        return next();
    });
};
