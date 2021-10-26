const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  avgRating: Number,
  totalReviews: Number,
  totalRatings: Number,
  trailer: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  summary: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model("Movie", MovieSchema);
