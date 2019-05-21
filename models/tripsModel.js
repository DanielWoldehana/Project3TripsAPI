const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const TripModel = new Schema({
  personName: String,
  email: String,
  countryVisited: String,
  cityVisited: String,
  stateVisited: String,
  image: String,
  dateVisited: String,
  stayedAt: String,
  activities: String,
  review: [
    {
      ref: "Review",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

module.exports = mongoose.model("Trip", TripModel);
