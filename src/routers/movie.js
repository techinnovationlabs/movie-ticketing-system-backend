const express = require("express");
const MovieController = require("../controllers/movie");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", auth, MovieController.fetchMovies);

router.get("/:id", auth, MovieController.fetchMovie);

module.exports = router;