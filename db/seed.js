const mongoose = require("./connections");
const TripModel = require("../models/tripsModel");
const bucketListModel = require("../models/bucketListModel");

const TripData = require("./allTrips.json");
const BucketData = require("./bucketList.json");

TripModel.deleteMany({}).then(() => {
  TripModel.create(TripData)
    .then(newTrip => {
      console.log(newTrip);
    })
    .catch(err => {
      console.error(err);
    });
});

bucketListModel.deleteMany({}).then(() => {
  bucketListModel
    .create(BucketData)
    .then(newBucket => {
      console.log(newBucket);
    })
    .catch(err => {
      console.error(err);
    });
});
