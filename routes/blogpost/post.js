const express = require("express");
const router = express.Router();

const blog = require("../../mocks/blogPosts");
const recent = require("../../mocks/recentPosts");

router.get("/post/:postTitle", getBlogpost, renderPage);

function getBlogpost (req, res, next) {
    for (let i = 0; i < blog.post.length; i++) {
        if (blog.post[i].link === req.params.postTitle) {
            res.locals.blogPost = blog.post[i];
        }
    }

    return next();
}

function renderPage (req, res, next) {
    res.render("post/blog", {
        blogPost: res.locals.blogPost,
        recentPosts: recent.posts
    });
}

module.exports = router;
