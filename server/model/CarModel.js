const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
    Make: {
        type: String,
        required: [true, "Make of the car is required"]
    },
    Model: {
        type: String,
        required: [true, "Model of the car can't be empty"]
    },
    Year: {
        type: Number,
        required: true,
    },
    Transmission: {
        type: String,
        required: true
    },
    Fuel: {
        type: String,
        required: true
    },
    Status: {
        type: Boolean,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    }
});

const car = mongoose.model("Car", carSchema);
module.exports = car;