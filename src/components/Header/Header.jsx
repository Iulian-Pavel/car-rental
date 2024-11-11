import React from "react";
import "./header.scss";
import carimg from "./header_assets/audi_img.png";
import blob from "../../assets/blob.svg";

function Header() {

  return (
    <>
      <header>
        <h1>
          Drive your Dreams,
          <br />
          Rent your Reality
        </h1>
        <div className="header__carblob">
          <img src={carimg} className="header__carimg" />
          <img src={blob} width={"100%"} className="header__blobimg" />
        </div>
      </header>
    </>
  );
}

export default Header;
