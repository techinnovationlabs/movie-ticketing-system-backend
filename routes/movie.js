const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movie");

router.get("/", MovieController.fetchMovies);

module.exports = router;
