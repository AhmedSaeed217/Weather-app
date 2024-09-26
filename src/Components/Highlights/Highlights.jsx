import React, { useContext, useEffect, useState } from "react";
import "./Highlights.css";
import { WeatherContext } from "../../Context/Weather";
import Highlightsskeleton from "../Highlightsskeleton/Highlightsskeleton";

function Highlights() {
  const { now, loading } = useContext(WeatherContext);
  // const [sunrise, setSunrise] = useState("");
  // const [sunset, setSunset] = useState("");

  useEffect(() => {
    
  }, []);

  return (
    <>
      {loading ? (
        <Highlightsskeleton />
      ) : (
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
                      {/* <p>{sunrise}</p> */}
                    </div>
                  </div>
                  <div className="sunset">
                    <i className="fa-regular fa-moon"></i>
                    <div className="info">
                      <span>Sunset</span>
                      {/* <p>{sunset}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-highlights">
              <div className="bottom-highlights-details">
                <span>Humidity</span>
                <div className="details">
                  <i className="fa-solid fa-droplet"></i>
                  <p>{now.main.humidity} %</p>
                </div>
              </div>

              <div className="bottom-highlights-details">
                <span>Pressure</span>
                <div className="details">
                  <i className="fas fa-water"></i>
                  <p>{now.main.pressure}hPa</p>
                </div>
              </div>

              <div className="bottom-highlights-details">
                <span>Visibility</span>
                <div className="details">
                  <i className="far fa-eye"></i>
                  <p>{now.visibility / 10}km</p>
                </div>
              </div>

              <div className="bottom-highlights-details">
                <span>Feels Like</span>
                <div className="details">
                  <i className="fas fa-temperature-high"></i>
                  <p>
                    {Math.floor(now.main.feels_like)}
                    <sup>°</sup>c
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Highlights;
