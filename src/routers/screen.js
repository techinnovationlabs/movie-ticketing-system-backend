const express = require("express");
const ScreenController = require("../controllers/screens");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", auth, ScreenController.fetchScreens);

router.post("/", auth, ScreenController.createScreen);

module.exports = router;