const Movie = require("../models/movie");
const Review = require("../models/review");

const postReview = async (req, res) => {
  try {
    let review = await new Review(req.body);
    review = review.save();
    let movie = await Movie.findById(req.body.movie);
    movie.totalRatings = movie.totalRatings + Number(req.body.rating);
    movie.totalReviews += 1;
    movie.avgRating = Number(
      (movie.totalRatings / movie.totalReviews).toFixed(1)
    );
    movie = movie.save();
    if (review) {
      if (movie) {
        return res.status(200).send("success");
      }
      return res.status(406).send("Error while updating rating in movies.");
    }
    return res.status(500).send("Unknown error");
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("An error occurred while posting review", err.message);
  }
};

module.exports = {
  postReview,
};
