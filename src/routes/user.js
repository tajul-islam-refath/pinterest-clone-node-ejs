const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  usename: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  boards: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("user", userSchema);
