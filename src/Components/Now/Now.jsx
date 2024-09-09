import React from "react";
import "./Now.css";
import cloud from "../../assets/images/weather_icons/04d.png";
function Now() {
  return (
    <div className="now">
      <h4>Now</h4>

      <div className="now-details">
        <p className="temprature">
          5<sup>&deg;</sup>C
        </p>
        <img src={cloud} alt="" />
      </div>

      <span className="status">Broken Clouds</span>

      <hr />

      <div className="date">
        <i className="fa-regular fa-calendar"></i>
        <span>Wednesday 1, Mar</span>
      </div>

      <div className="location">
        <i className="fa-solid fa-location-dot"></i>
        <span>London, GB</span>
      </div>
    </div>
  );
}

export default Now;
