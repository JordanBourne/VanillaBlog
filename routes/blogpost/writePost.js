const express = require("express");
const router = express.Router();

const writePost = require("../../middleware/blogPost/writePost");
const render = require("../../middleware/render");

router.get("/write/post",
    writePost,
    render);

module.exports = router;
