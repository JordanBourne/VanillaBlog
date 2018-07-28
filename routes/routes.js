const express = require("express");
const router = express.Router();

router.use(require("./homepage/homepage"));
router.use(require("./about/about"));

router.use(require("./blogpost/createPost"));
router.use(require("./blogpost/getPost"));
router.use(require("./blogpost/updatePost"));
router.use(require("./blogpost/writePost"));

module.exports = router;
