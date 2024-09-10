const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/review");

router.post("/", ReviewController.postReview);

module.exports = router;
