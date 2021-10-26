const Movie = require("../models/movie");

const fetchMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    if (movies.length) {
      return res.status(200).send(movies);
    } else {
      return res.status(404).send("Movies List empty");
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("An error occurred while fetching movies", err.message);
  }
};

module.exports = {
  fetchMovies,
};
