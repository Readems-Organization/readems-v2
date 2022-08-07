const mongoose = require('mongoose');

const WaitlistSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Waitlists', WaitlistSchema);
