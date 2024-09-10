const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    trailerLink: {
        type: String,
        required: true,
        trim: true
    },
    plot: {
        type: String,
        required: true,
        trim: true,
    },
    poster: {
        type: String,
        required: true
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;