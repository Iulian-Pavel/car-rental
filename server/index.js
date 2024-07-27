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

app.get("/insert", async (req, res) => {
  const car = new CarModel({
    id: 1,
    Make: "Audi",
    Model: "R8",
    Year: "2008",
    Transmission: "Manual",
    Fuel: "Diesel",
    Status: true,
    Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/R8_Coupe_V10_performance-1.jpg/1280px-R8_Coupe_V10_performance-1.jpg"
  });
  try {
    await car.save();
    res.send("car saved in db");
  } catch (error) {
    console.log(`Erorr while saving car to the database: ${error}`);
  }
});

app.get("/retrieve", async (req, res) => {
  try {
   const cars = await CarModel.find({});
    res.status(200).json(cars);
  } catch (error) {
    console.log(`Error while retrieving cars from the database ${error}`);
    res.status(500).json({error: "Error while retrieving cars from the database"})
  }
});

app.listen(3001, () => {
  console.log(`Running on port 3001`);
});
