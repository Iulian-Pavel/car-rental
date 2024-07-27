import React from "react";
import "./carcontainer.module.scss";
import {
  car,
  car__icons,
  rent_button,
  icon,
  car__info,
} from "./carcontainer.module.scss";
import fuel_type_icon from "../../icons/fuel_type.svg";
import year_icon from "../../icons/year.svg";
import transmission_icon from "../../icons/transmision.svg";
import info_icon from "../../icons/info.svg";

function CarContainer({ make, model, year, fuel, transmission, price, image }) {
  return (
    <>
      <div className={car}>
        <img src={image} />
        <h1>
          {make} <span>{model}</span>
        </h1>
        <p>{price}</p>
        <div className={car__icons}>
          <img src={fuel_type_icon} className={icon} /> <span>{fuel} </span>
          <img src={transmission_icon} className={icon} />{" "}
          <span>{transmission}</span>
          <img src={year_icon} className={icon} /> <span>{year}</span>
        </div>
        <div className={car__info}>
          <button className={rent_button}>Rent Car</button>
          <button>
            <img src={info_icon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default CarContainer;
