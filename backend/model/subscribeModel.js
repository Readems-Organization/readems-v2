const mongoose = require('mongoose');

const SubscribesSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('SubscribesEmail', SubscribesSchema);
