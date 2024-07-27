import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import CarContainer from "../components/CarContainer/CarContainer";
import { fleet } from "../scss/fleet.module.scss";
import Axios from "axios";

function OurFleet() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/retrieve");
        setCarData(response.data);
        console.log(carData);
      } catch (error) {
        console.log(`Error fetching car data ${error}`);
      }
    };
    fetchCarData();
  }, []);

  return (
    <>
      <Navbar />
      <div className={fleet}>
        {carData.map((car, key,) => (
          <CarContainer
            make={car.Make}
            model={car.Model}
            key={key}
            transmission={car.Transmission}
            year={car.Year}
            fuel={car.Fuel}
            image={car.Image}
          />
        ))}
      </div>
    </>
  );
}

export default OurFleet;
