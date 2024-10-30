import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import InfoCard from "../../components/InfoCard/InfoCard";
import axios from "axios";
import axiosInstance from "../../utils/interceptors";
import {
  dashboard,
  button,
  modal,
  modal_inputs,
  modal_close,
} from "./admin.module.scss";
import placeholder from "../../../images/placeholder.jpg";

function Admin() {

  const [isModalOpen, setIsModalOpen] = useState("false");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState("false");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmissionType, setTransimissionType] = useState("");
  const [price, setPrice] = useState("");
  const [linkToImage, setLinkToImage] = useState("");

  const addCar = async () => {
    let carData;
    try {
      carData = {
        make: make,
        model: model,
        year: year,
        fuelType: fuelType,
        transmissionType: transmissionType,
        price: price,
        linkToImage: linkToImage,
      }
      const response = await axiosInstance.post("/insert", carData);
    } catch(error) {
      console.log("An error occured while inserting car ", error);
      console.log(response)
    }
  }

  const removeCar = async () => {
    try {
      const response = axios.delete("http://localhost:3001/remove", {
        data: {
          make: make,
          model: model,
          year: year
        }
      });
      console.log("Car deleted sucsessfully", response.data);
    } catch(error) {
      console.log("Error while removing car");
    }
  }

  return (
    <>
      <Navbar />
      <div className={dashboard}>
        <InfoCard
          title="Cars in fleet"
          infoNumber={60}
          image={placeholder}
          bgcolor="blue"
        />
        <InfoCard
          title="Cars available"
          infoNumber={60}
          image={placeholder}
          bgcolor="blue"
        />
        <InfoCard
          title="Total Revenue"
          infoNumber={60}
          image={placeholder}
          bgcolor="blue"
        />
      </div>
      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        style={{ backgroundColor: "green" }}
        className={button}
      >
        Add car
      </button>
      <button
        style={{ backgroundColor: "red" }}
        className={button}
        onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
      >
        remove car
      </button>

      {/* Modal for adding the car */}
      <div className={isModalOpen ? modal_close : modal}>
        <div className={modal_inputs}>
          <button onClick={() => setIsModalOpen(!isModalOpen)}>X</button>
          <input
            type="text"
            placeholder="Make"
            onChange={(e) => setMake(e.target.value)}
          />
          <input
            type="text"
            placeholder="Model"
            onChange={(e) => setModel(e.target.value)}
          />
          <input
            type="text"
            placeholder="Year"
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            type="text"
            placeholder="Fuel Type"
            onChange={(e) => setFuelType(e.target.value)}
          />
          <input
            type="text"
            placeholder="Transmission Type"
            onChange={(e) => setTransimissionType(e.target.value)}
          />
          <input
            type="text"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Link to Image"
            onChange={(e) => setLinkToImage(e.target.value)}
          />
          <button onClick={addCar}>add car</button>
        </div>
      </div>

      {/* Remove car modal */}
      <div className={isDeleteModalOpen ? modal_close : modal}>
        <div className={modal_inputs}>
          <button onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}>X</button>
          <input
            type="text"
            placeholder="Make"
            onChange={(e) => setMake(e.target.value)}
          />
          <input
            type="text"
            placeholder="Model"
            onChange={(e) => setModel(e.target.value)}
          />
          <input
            type="text"
            placeholder="Year"
            onChange={(e) => setYear(e.target.value)}
          />
          <button onClick={removeCar}>remove car</button>
        </div>
      </div>
    </>
  );
}

export default Admin;
