const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const TicketSchema = new Schema({
  time: { type: Schema.Types.ObjectId, ref: "showtiming", required: true },
  movie: { type: Schema.Types.ObjectId, ref: "movie", required: true },
  screen: { type: Schema.Types.ObjectId, ref: "screen", required: true },
  seats: {
    type: Number,
    required: true,
  },
  totalPrice: Number,
  consessionSeats: {
    type: Number,
    default: 0,
  },
  showDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model("Ticket", TicketSchema);
