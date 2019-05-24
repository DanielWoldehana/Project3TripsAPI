const mongoose = require("./connections");
const TripModel = require("../models/tripsModel");
const ReviewModel = require("../models/ReviewsModel");

const TripData = require("./allTrips.json");

TripModel.deleteMany({}).then(() => {
  TripModel.create(TripData).then(newTrip => {
    console.log(newTrip);
  });
});
