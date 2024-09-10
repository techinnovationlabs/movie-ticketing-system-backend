const express = require("express");
const SlotController = require("../controllers/showslot");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", auth, SlotController.fetchShowSlots);

module.exports = router;