const express = require("express");
const router = express.Router();

const getPost = require("../../middleware/blogPost/getPost");
const getRecent = require("../../middleware/blogPost/getRecent");
const render = require("../../middleware/render");

router.get("/post/:postLink",
    getPost,
    getRecent,
    render);

module.exports = router;
