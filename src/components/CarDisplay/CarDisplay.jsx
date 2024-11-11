import React, { useState } from "react";
import { car_display, buttons, images, fadeImage, button, car_display_title } from "./cardisplay.module.scss";
import audi from "../../assets/cars/audi_r8.png";
import passat from "../../assets/cars/passat.png";
import toyota_yaris from "../../assets/cars/toyota_yaris.png"

function CarDisplay() {
  const carData = [
    { name: "Audi R8", img: audi, price: "30$/h" },
    { name: "Volkswagen Passat", img: passat, price: "15$/hr" },
    { name: "Toyota Yaris", img: toyota_yaris, price: "50$/hr" },
  ];

  const [selectedCar, setSelectedCar] = useState(carData[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCarChange = (car) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCar(car);
      setIsAnimating(false);
    }, 500);  //time to match the transition time in cardisplay.module.scss
  };

  return (
    <>
      <h1 className={car_display_title}>Take a look at some of our models</h1>
      <br />
      <div className={car_display}>
        <div className={buttons}>
          {carData.map((car, key) => (
            <button key={key} onClick={() => handleCarChange(car)} data-front={car.name} data-back={car.price} className={button}>
            </button>
          ))}
        </div>
        <div className={images}>
          <img
            className={isAnimating ? fadeImage : ""}
            src={selectedCar.img}
            alt={selectedCar.name}
          />
        </div>
      </div>
    </>
  );
}

export default CarDisplay;
