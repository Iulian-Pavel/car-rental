import React from "react";
import {
  hero__container,
  hero__content,
  reasons,
  reason,
  hero__title,
} from "./herosection.module.scss";
import placeholder from "../../../images/placeholder.jpg";
function HeroSection() {

  return (
    <>
      <br />
      <br />
      <div className={hero__container}>
        <h1 className={hero__title}>Why Choose Us?</h1>
        <div className={hero__content}>
          <img src={placeholder} width={400} />
          <div className={reasons}>
            <div className={reason}>
              <h1>No Delays</h1>
              <p>
                This is a piece of informational text that contains a lot of
                information about something on this website
              </p>
            </div>
            <div className={reason}>
              <h1>No Delays</h1>
              <p>
                This is a piece of informational text that contains a lot of
                information about something on this website
              </p>
            </div>
            <div className={reason}>
              <h1>No Delays</h1>
              <p>
                This is a piece of informational text that contains a lot of
                information about something on this website
              </p>
            </div>
            <div className={reason}>
              <h1>No Delays</h1>
              <p>
                This is a piece of informational text that contains a lot of
                information about something on this website
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
