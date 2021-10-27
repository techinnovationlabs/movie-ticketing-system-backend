const express = require("express");
const router = express.Router();
const ShowController = require("../controllers/show");

router.get("/", ShowController.fetchShows);
router.get("/timings", ShowController.fetchShowTimings);
router.post("/", ShowController.createShow);

module.exports = router;
