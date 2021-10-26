const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const ShowSchema = new Schema({
  name: string,
  time: { type: Schema.Types.ObjectId, ref: "showtiming" },
  movie: { type: Schema.Types.ObjectId, ref: "movie" },
  screen: { type: Schema.Types.ObjectId, ref: "screen" },
  availableSeats: Number,
  bookedSeats: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model("Show", ShowSchema);
