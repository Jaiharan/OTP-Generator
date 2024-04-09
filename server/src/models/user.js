const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  otp_code: {
    type: String,
    required: false
  },
  otp_expiration: {
    type: Date,
    required: false
  },
  is_verified: {
    type: Boolean,
    required: false
  },
});

const Users = mongoose.model('Users',userSchema);
module.exports = Users;