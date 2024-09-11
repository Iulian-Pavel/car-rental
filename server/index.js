const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const CarModel = require("./model/CarModel");

app.use(cors());
app.use(express.json());

let CONNECTION_LINK = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@carrental.4i0eunr.mongodb.net/`;
mongoose.connect(CONNECTION_LINK);

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(`An error occured while connecting to the database: ${error}`);
});

db.once("open", () => {
  console.log("Sucessfully connected to the database");
});

const getCarDataFromBody = (body) => {
  return {
    Make: body.make,
    Model: body.model,
    Year: body.year,
    Transmission: body.transmissionType,
    Fuel: body.fuelType,
    Status: true,
    Image: body.linkToImage,
    Price: body.price,
  };
};

app.post("/insert", async (req, res) => {
  const carDetails = getCarDataFromBody(req.body);

  const car = new CarModel(carDetails);

  try {
    await car.save();
    res.send("car saved in db");
  } catch (error) {
    console.log(`Erorr while saving car to the database: ${error}`);
    res.status(500).json({ error: `Error while inserting car into the db ${error}` })
  }
});

app.get("/retrieve", async (req, res) => {
  try {
    const cars = await CarModel.find({});
    res.status(200).json(cars);
  } catch (error) {
    console.log(`Error while retrieving cars from the database ${error}`);
    res
      .status(500)
      .json({ error: error.message });
  }
});

app.delete("/remove", async (req, res) => {
  try {
    const make = req.body.make;
    const model = req.body.model;
    const year = req.body.year;
    await CarModel.deleteOne({ Make: make, Model: model, Year: year });
    res.status(200).send("Car deleted successfully");
  } catch (error) {
    console.log(`Error while deleting car: ${error}`);
    res.status(500).json({ error: `Error while removing car from db ${error}` });
  }
});

// app.update("/edit", async (req, res) => {
//   /*
//   */
//   try {
//     // const filter = { make: make, model: model };
//     // const options = { upsert: false };
//     // const updateDoc = {
//     //   $set: {
//     //    // All variables that need to be edited will go here
//     //   }
//     // }
//     // const result = CarModel.updateOne(filter, updateDoc, options)
//   } catch (error) {
//     console.log(`Error while editing vehicle data: ${error}`);
//   }
// });

app.listen(3001, () => {
  console.log(`Running on port 3001`);
});
