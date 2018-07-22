const express = require("express");
const router = express.Router();

router.use(require("./homepage/homepage"));
router.use(require("./blogpost/post"));
router.use(require("./about/about"));

module.exports = router;
