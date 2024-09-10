import React from "react";
import "./Forecast.css";
import pic from "../../assets/images/weather_icons/01n.png";
import pic2 from "../../assets/images/weather_icons/10n.png";
export default function Forecast() {
  return (
    <div className="forecast">
      <h3>5 Days Forecast</h3>
      <div className="forecast-days">
        <div className="day-details">
          <div className="temp">
            <img src={pic} alt="" />
            <span>
              7<sup>&deg;</sup>
            </span>
          </div>

          <div className="date">
            <span>2 Mar</span>
          </div>

          <div className="day">
            <span>Thursday</span>
          </div>
        </div>

        <div className="day-details">
          <div className="temp">
            <img src={pic} alt="" />
            <span>
              7<sup>&deg;</sup>
            </span>
          </div>

          <div className="date">
            <span>3 Mar</span>
          </div>

          <div className="day">
            <span>Friday</span>
          </div>
        </div>

        <div className="day-details">
          <div className="temp">
            <img src={pic2} alt="" />
            <span>
              6<sup>&deg;</sup>
            </span>
          </div>

          <div className="date">
            <span>4 Mar</span>
          </div>

          <div className="day">
            <span>Saturday</span>
          </div>
        </div>
        <div className="day-details">
          <div className="temp">
            <img src={pic2} alt="" />
            <span>
              4<sup>&deg;</sup>
            </span>
          </div>

          <div className="date">
            <span>5 Mar</span>
          </div>

          <div className="day">
            <span>Sunday</span>
          </div>
        </div>

        <div className="day-details">
          <div className="temp">
            <img src={pic2} alt="" />
            <span>
              5<sup>&deg;</sup>
            </span>
          </div>

          <div className="date">
            <span>6 Mar</span>
          </div>

          <div className="day">
            <span>Monday</span>
          </div>
        </div>

      </div>
    </div>
  );
}
