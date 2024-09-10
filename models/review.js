const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  rating: Number,
  movie: { type: Schema.Types.ObjectId, ref: "movie" },
  comment: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model("Review", ReviewSchema);
