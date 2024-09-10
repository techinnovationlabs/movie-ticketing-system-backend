const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const ShowTimingSchema = new Schema({
  title: String,
  time: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model("ShowTiming", ShowTimingSchema);
