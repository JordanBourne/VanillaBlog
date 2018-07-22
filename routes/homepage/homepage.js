const express = require("express");
const router = express.Router();

const blog = require("../../mocks/blogPosts");

router.get("/", renderPage)

function renderPage (req, res, next) {
    res.render("index", {
        blog: blog
    });
}

module.exports = router;
