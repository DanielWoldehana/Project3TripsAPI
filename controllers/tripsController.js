const express = require("express");
const router = express.Router();
const TripModel = require("../models/tripsModel");
const ReviewModel = require("../models/bucketListModel");

router.get("/", (req, res) => {
  TripModel.find({})
    .then(ph => {
      res.json(ph);
    })
    .catch(err => {
      console.error(err);
    });
});

router.post("/create", (req, res) => {
  TripModel.create(req.body)
    .then(newTrip => {
      res.json(newTrip);
    })
    .catch(err => {
      console.error(err);
    });
});

router.put("/updateTrip/:cityVisited", (req, res) => {
  TripModel.update({ cityVisited: req.params.cityVisited }, req.body)
    .then(debt => {
      res.json(debt);
      console.log(debt);
    })
    .catch(err => {
      console.error(err);
    });
});

router.delete("/delete/:name", (req, res) => {
  TripModel.deleteOne({ cityVisited: req.params.name })
    .then(debt => {
      res.json(debt);
      // console.log(debt);
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
