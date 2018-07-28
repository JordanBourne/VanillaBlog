const express = require("express");
const router = express.Router();

const createPost = require("../../middleware/blogPost/createPost");
const render = require("../../middleware/render");

router.post("/create/post",
    createPost);

module.exports = router;
