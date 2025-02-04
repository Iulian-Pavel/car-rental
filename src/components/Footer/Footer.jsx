import React from "react";
import {
  footer_container,
  footer_social,
  footer_info,
  footer_icons,
} from "./Footer.module.scss";

import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function FooterInformation({ links, title }) {
  return (
    <>
      <h1>{title}</h1>
      {links.map((link, index) => (
        <div key={index}>
          <p>{link}</p>
        </div>
      ))}
    </>
  );
}

function Footer() {
  return (
    <>
      <div className={footer_container}>
        <div className={footer_social}>
          <h1>Car Rental</h1>
          <br />
          <p>
            It's a never ending battle to
            <br />
            make your cars better
          </p>
          <div className={footer_icons}>
            <span>
              {" "}
              <FaInstagram />{" "}
            </span>
            <span>
              {" "}
              <IoLogoFacebook />{" "}
            </span>
            <span>
              {" "}
              <FaLinkedin />{" "}
            </span>
            <span>
              {" "}
              <FaSquareXTwitter />{" "}
            </span>
          </div>
        </div>

        {/* Doesnt look elegant but for now it'll do */}
        <div className={footer_info}>
          <FooterInformation title="About" links={["Services", "Prices", "Contact", "Careers"]} />
        </div>
        <div className={footer_info}>
          <FooterInformation title="Account" links={["Profile", "Settings", "Billing", "Notifications"]} />
        </div>
        <div className={footer_info}>
          <FooterInformation title="Company" links={["Community", "Help Center", "Support"]} />
        </div>
      </div>
    </>
  );
}

export default Footer;
