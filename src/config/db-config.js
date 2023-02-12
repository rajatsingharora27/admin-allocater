const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/food-website", {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("Connected to the database");
      })
      .catch((error) => {
        console.log("error connecting to the database", error.message);
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnection;
