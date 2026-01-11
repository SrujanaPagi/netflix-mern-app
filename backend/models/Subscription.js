const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  planName: {
    type: String,
    enum: ["Basic", "Standard", "Premium"],
    required: true
  },
  monthlyPrice: Number,
  videoQuality: String,
  screensAllowed: Number,
  duration: Number,
  status: {
    type: String,
    default: "Active"
  }
});

module.exports = mongoose.model("Subscription", subscriptionSchema);
