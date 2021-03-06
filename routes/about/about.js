const express = require("express");
const router = express.Router();

const getAbout = require("../../middleware/blogPost/getAbout");
const getRecent = require("../../middleware/blogPost/getRecent");
const render = require("../../middleware/render");

router.get("/about",
    getAbout,
    getRecent,
    render
);

module.exports = router;
