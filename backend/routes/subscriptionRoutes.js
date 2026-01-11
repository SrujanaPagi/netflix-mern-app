const express = require("express");
const Subscription = require("../models/Subscription");

const router = express.Router();

router.post("/subscribe", async (req, res) => {
  const { userName, planName, duration } = req.body;

  const plans = {
    Basic: { price: 199, quality: "SD", screens: 1 },
    Standard: { price: 499, quality: "HD", screens: 2 },
    Premium: { price: 799, quality: "4K", screens: 4 }
  };

  const selectedPlan = plans[planName];

  const newSubscription = new Subscription({
    userName,
    planName,
    monthlyPrice: selectedPlan.price,
    videoQuality: selectedPlan.quality,
    screensAllowed: selectedPlan.screens,
    duration,
    status: "Active"
  });

  await newSubscription.save();

  res.json({
    message: `Subscription successful for ${planName} plan`,
    status: "Active"
  });
});

module.exports = router;
