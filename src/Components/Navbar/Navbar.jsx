import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
function Navbar({ setSearchWord }) {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>

        <div className="search-box">
          <input type="search" placeholder="Search City..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="location">
          <i className="fa-solid fa-location-crosshairs"></i>
          <span>Current Location</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
