import React from "react";
import "./carcontainer.module.scss";
import placeholder from "../../../images/placeholder.jpg";
import { car, car__info, rent_button, icon } from "./carcontainer.module.scss";
import fuel_type_icon from "../../icons/fuel_type.svg";
import year_icon from "../../icons/year.svg";
import transmission_icon from "../../icons/transmision.svg";

function CarContainer({ name, year, fuel, transmission, price, image }) {
  return (
    <>
      <div className={car}>
        <img src={image} />
        <h1>{name}</h1>
        <p>{price}</p>
        <div className={car__info}>
          <img src={fuel_type_icon} className={icon}/> <span>{fuel} </span>
          <img src={transmission_icon} className={icon}/> <span>{transmission}</span>
          <img src={year_icon} className={icon}/> <span>{year}</span>
        </div>
        <button className={rent_button}>Rent Car</button>
      </div>
    </>
  );
}

export default CarContainer;
