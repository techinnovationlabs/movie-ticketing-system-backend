const express = require("express");
const BookController = require("../controllers/book");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/", auth, BookController.bookShow);

module.exports = router;