const express = require("express");
const router = express.Router();

const recent = require("../../mocks/recentPosts");

router.get("/about", renderPage);

function renderPage (req, res, next) {
    res.render("about/about", {
        recentPosts: recent.posts
    });
}

module.exports = router;
