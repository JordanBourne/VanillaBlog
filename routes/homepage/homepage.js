const express = require("express");
const router = express.Router();

const getHome = require("../../middleware/homepage/get");
const render = require("../../middleware/render");

router.get("/",
    getHome,
    render);

module.exports = router;
