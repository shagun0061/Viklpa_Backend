const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  school: { type: String, required: true },
  class: { type: String, required: true },
  roll_no: { type: Number, required: true },
  address: { type: String, required: true },
});

const UserModel = mongoose.model("admitcard", userSchema);

module.exports = { UserModel };
