const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const ScreenSchema = new Schema({
  name: {
    type: string,
    required: true,
  },
  shows: { type: Schema.Types.ObjectId, ref: "show" },
  category: [
    {
      name: {
        type: string,
        enum: ["NORMAL", "PREMIUM"],
        default: "NORMAL",
      },
      seats: string,
      adultPrice: Number,
      childPrice: Number,
    },
  ],
  capacity: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model("Screen", ScreenSchema);
