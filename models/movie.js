const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: string,
    required: true,
  },
  description: string,
  avgRating: Number,
  totalReviews: Number,
  totalRatings: Number,
  trailer: {
    type: string,
    required: true,
  },
  poster: {
    type: string,
    required: true,
  },
  summary: string,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model("Movie", MovieSchema);
