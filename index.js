const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();
const TripController = require("./controllers/tripsController");

app.use(cors());
app.set("port", process.env.PORT || 3001);
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use("/api/trips", TripController);

app.listen(app.get("port"), () => {
  console.log("Thor is teleporting through port " + app.get("port"));
});
