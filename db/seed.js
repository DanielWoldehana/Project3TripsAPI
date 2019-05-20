const mongoose = require("./connections");
const TripModel = require("../models/tripsModel");
const ReviewModel = require("../models/ReviewsModel");

const TripData = require("./allTrips.json");
const ReviewData = require("./reviews.json");

TripModel.deleteMany({}).then(() => {
  ReviewModel.deleteMany({}).then(() => {
    for (let i = 0; i < TripModel.length; i++) {
      TripModel.create(TripData[i]).then(newTrip => {
        ReviewModel.create(ReviewData[i]).then(newReview => {
          newTrip.review.push(newReview._id);
          newReview.trip.push(newTrip._id);
          newTrip.save();
          newReview.save();
          console.log(newTrip);
        });
      });
    }
  });
});
