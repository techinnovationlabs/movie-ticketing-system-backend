const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const ScreenSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: [
    {
      name: {
        type: String,
        enum: ["NORMAL", "PREMIUM"],
        default: "NORMAL",
      },
      adultPrice: Number,
      childPrice: Number,
    },
  ],
  size: String,
  seats: Object,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model("Screen", ScreenSchema);
