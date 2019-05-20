const express = require("express");
const router = express.Router();
const TripModel = require("../models/tripsModel");
const ReviewModel = require("../models/ReviewsModel");

router.get("/", (req, res) => {
  TripModel.find({})
    .populate("Review")
    .then(ph => {
      res.json(ph);
    })
    .catch(err => {
      console.error(err);
    });
});

router.get("/reviews", (req, res) => {
  ReviewModel.find({})
    .then(ph => {
      res.json(ph);
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
