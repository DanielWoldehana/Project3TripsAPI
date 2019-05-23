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

// router.get("/reviews", (req, res) => {
//   ReviewModel.find({})
//     .then(ph => {
//       res.json(ph);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// });

router.post("/create", (req, res) => {
  TripModel.create(req.body)
    .then(newTrip => {
      res.json(newTrip);
    })
    .catch(err => {
      console.error(err);
    });
});

router.put("/updateTrip/:name", (req, res) => {
  TripModel.update({ name: req.params.cityVisited }, req.body)
    .then(debt => {
      res.json(debt);
      console.log(debt);
    })
    .catch(err => {
      console.error(err);
    });
});

// router.put("/updateReview/:name", (req, res) => {
//   ReviewModel.update({ name: req.params.name }, req.body)
//     .then(debt => {
//       res.json(debt);
//       console.log(debt);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// });

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

// router.delete("/delete/:id", (req, res) => {
//   ReviewModel.deleteOne({ _id: req.params.id })
//     .then(debt => {
//       res.json(debt);
//       // console.log(debt);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// });
module.exports = router;
