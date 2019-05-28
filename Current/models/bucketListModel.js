const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const ReviewsModel = new Schema({
  country: String,
  city: String,
  site: String
});

module.exports = mongoose.model("Review", ReviewsModel);
