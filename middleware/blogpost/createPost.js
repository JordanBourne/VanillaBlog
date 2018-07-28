const CreatePost = require("../../lib/posts/createPost");

module.exports = function (req, res, next) {
    let createPost = new CreatePost({
        post: req.body
    });

    createPost.saveToDatabase((err) => {
        console.log('## SAVED TO DB');
        if (err) {
            console.log(err);
            return next(err);
        }

        return next();
    });
};
