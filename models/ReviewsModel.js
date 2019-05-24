const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const ReviewsModel = new Schema({
  comments: String,
  rating: Number,
  trip: [
    {
      ref: "Trip",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

module.exports = mongoose.model("Review", ReviewsModel);
