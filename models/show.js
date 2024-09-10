const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const ShowSchema = new Schema({
  name: String,
  time: { type: Schema.Types.ObjectId, ref: "ShowTiming" },
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
  screen: { type: Schema.Types.ObjectId, ref: "Screen" },
  seats: Object,
  availableSeats: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model("Show", ShowSchema);
