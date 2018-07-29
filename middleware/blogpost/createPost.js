const CreatePost = require("../../lib/posts/createPost");

module.exports = function (req, res, next) {
    let createPost = new CreatePost({
        post: req.body
    });

    createPost.saveToDatabase((err) => {
        if (err) {
            console.log(err);
            return next(err);
        }

        return next();
    });
};
