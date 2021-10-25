const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movie: {
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    },
    comment: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;