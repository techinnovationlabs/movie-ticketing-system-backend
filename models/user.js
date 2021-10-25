const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 1024,
  },
  name: String,
  phoneNumber: String,
  gender: {
    type: String,
    required: true,
    enum: ["MALE", "FEMALE", "OTHER"],
    default: "MALE",
  },
  role: [
    {
      type: String,
      required: true,
      enum: ["VISITOR", "OWNER"],
      default: "VISITOR",
    },
  ],
  _created_at: { type: Date, default: Date.now },
  _updated_at: Date,
  status: {
    type: String,
    enum: ["Active", "De-activated"],
    default: "Active",
  },
});

module.exports = mongoose.model("User", UserSchema);
