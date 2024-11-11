import React from 'react';
import {hero__container, hero__content, reasons} from "./herosection.module.scss";
import placeholder from "../../../images/placeholder.jpg"
function HeroSection() {
  return (
    <>
        <div className={hero__container}>
            <div className={hero__content}>
                <img src={placeholder} width={400} />
                <div className={reasons}>
                    <p>test</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection