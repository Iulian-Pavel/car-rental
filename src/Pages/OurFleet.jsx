import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import CarContainer from "../components/CarContainer/CarContainer";
import { OurFleet__carFleet } from "../scss/fleet.module.scss";

function OurFleet() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetch("/car_data.json")
      .then((response) => response.json())
      .then((data) => setCarData(data))
      .catch((err) => console.error(`Error fetching car data ${err}`));
  }, []);

  console.log(carData);

  return (
    <>
      <Navbar />
      <div className={OurFleet__carFleet}>
        {carData.map((car) => (
          <CarContainer
            name={car.name}
            key={car.id}
            transmission={car.transmission}
            year={car.year}
            fuel={car.fuel}
            image={car.image}
          />
        ))}
      </div>
    </>
  );
}

export default OurFleet;
