const express = require("express");
const ShowController = require("../controllers/show");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", auth, ShowController.fetchShows);

router.post("/", auth, ShowController.createShow);

module.exports = router;