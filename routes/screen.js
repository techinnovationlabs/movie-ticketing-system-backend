const express = require("express");
const router = express.Router();
const ScreenController = require("../controllers/screen");

router.get("/", ScreenController.fetchScreens);
router.post("/", ScreenController.createScreen);
router.patch("/", ScreenController.editScreen);

module.exports = router;
