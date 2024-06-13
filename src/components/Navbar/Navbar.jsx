import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/navbar.scss";

import logo from "../../assets/logo.jpg";
import open_btn from "./nav_assets/open_menu.svg";
import close_btn from "./nav_assets/close_menu.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <nav className={isOpen ? "nav-responsive" : ""}>
        <div className="logo">
          <img src={logo} width={150} />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="fleet">Our Fleet</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? close_btn : open_btn} width={35} />
        </button>
      </nav>
    </>
  );
}

export default Navbar;
