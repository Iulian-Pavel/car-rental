import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import InfoCard from "../../components/InfoCard/InfoCard";
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
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmissionType, setTransimissionType] = useState("");
  const [price, setPrice] = useState("");
  const [linkToImage, setLinkToImage] = useState("");
  console.log(isModalOpen);
  const addCar = async () => {
    try {
      Axios.post("http://localhost:3001/insert", {
        make: make,
        model: model,
        year: year,
        fuelType: fuelType,
        transmissionType: transmissionType,
        price: price,
        linkToImage: linkToImage
      })
    } catch (error) {
      console.log(`An error has occured when talking to server ${error}`);
    }
  };

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
      <button style={{ backgroundColor: "red" }} className={button}>
        remove car
      </button>

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
          <button>add car</button>
        </div>
      </div>
    </>
  );
}

export default Admin;
