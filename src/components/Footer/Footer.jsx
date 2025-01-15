import React from "react";
import {
  footer_container,
  footer_social,
  footer_info,
  footer_copyright,
} from "./Footer.module.scss";

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
        </div>


        {/* Doesnt look elegant but for now it'll do */}
        <div className={footer_info}>
          <FooterInformation title="About" links={["bruh", "bruh2", "dsad"]} />
        </div>
        <div className={footer_info}>
          <FooterInformation title="About" links={["bruh", "bruh2", "dsad"]} />
        </div>
        <div className={footer_info}>
          <FooterInformation title="About" links={["bruh", "bruh2", "dsad"]} />
        </div>
        
        <div className={footer_copyright}></div>
      </div>
    </>
  );
}

export default Footer;
