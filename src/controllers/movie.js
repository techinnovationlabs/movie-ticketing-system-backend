const Movie = require("../models/movie");

const fetchMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.send(movies);
    } catch (e) {
        res.status(500)
            .send("An error occurred while fetching the movies: " + e.message);
    }
};

const fetchMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).send();
        }
        res.send(movie);
    } catch (e) {
        res.status(500)
            .send("An error occurred while fetching the movie: " + e.message);
    }
};

module.exports = {
    fetchMovies,
    fetchMovie
};