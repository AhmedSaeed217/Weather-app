import React from "react";
import "./Highlights.css";

function Highlights() {
  return (
    <div className="highlights">
      <div className="container">
        <h3>Todays Highlights</h3>
        <div className="top-highlights">
          <div className="air-quality">
            <div className="air-quality-description">
              <p>Air Quality Index</p>
              <span>Good</span>
            </div>
            <div className="air-quality-info">
              <i className="fa-solid fa-wind"></i>
              <div className="pm">
                <span>PM25</span>
                <p>3.90</p>
              </div>
              <div className="so">
                <span>SO2</span>
                <p>7.75</p>
              </div>
              <div className="no">
                <span>NO2</span>
                <p>33.6</p>
              </div>
              <div className="o">
                <span>O3</span>
                <p>38.6</p>
              </div>
            </div>
          </div>
          <div className="sunrise-sunset">
            <div className="sunrise-sunset-description">
              <p>Sunrise & Sunset</p>
            </div>
            <div className="sunrise-sunset-info">
              <div className="sunrise">
                <i className="fa-regular fa-sun"></i>
                <div className="info">
                  <span>Sunrise</span>
                  <p>6:46 AM</p>
                </div>
              </div>
              <div className="sunset">
                <i className="fa-regular fa-moon"></i>
                <div className="info">
                  <span>Sunset</span>
                  <p>5:39 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-highlights">
          <div className="humidity">
            <span>Humidity</span>
            <i class="fa-solid fa-droplet"></i>
            <p>82%</p>
          </div>
          <div className="pressure"></div>
          <div className="visibility"></div>
          <div className="feels-like"></div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
