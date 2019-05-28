const mongoose = require("mongoose");
const shortid = require('shortid');
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
      },
  username: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  userlevel: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("users", UserSchema);