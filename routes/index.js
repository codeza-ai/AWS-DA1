const express = require("express");
const router = express.Router();

const {getAFox, getACity } = require("../controllers/index.js");

router.get("/fox", getAFox);
router.get("/city", getACity);

module.exports = router;