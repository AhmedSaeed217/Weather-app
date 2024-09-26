import React, { useContext, useEffect, useState } from "react";
import "./Now.css";
import { WeatherContext } from "../../Context/Weather";
import Nowskeleton from "../Nowskeleton/Nowskeleton";
function Now() {
  const [currentTime, setCurrentTime] = useState("");

  const { now, loading } = useContext(WeatherContext);
  function getTimeByOffset(offsetInSeconds) {
    const now = new Date();
    const offsetInMilliseconds = offsetInSeconds * 1000;
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const targetTime = new Date(utcTime + offsetInMilliseconds);

    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return targetTime.toLocaleTimeString([], options);
  }

  const today = new Date();
  const options = { weekday: "long", day: "numeric", month: "short" };
  const formattedDate = today
    .toLocaleDateString("en-US", options)
    .replace(",", "");
 
  useEffect(() => {
    const updateTime = () => {
      if (now && now.timezone) {
        setCurrentTime(getTimeByOffset(now.timezone));
      }
    };
    updateTime(); 
    const intervalId = setInterval(updateTime, 1000); // Update time every second
    return () => clearInterval(intervalId); 
  }, [now]);
  return (
    <>
      {loading ? (
        <Nowskeleton />
      ) : (
        <div className="now">
          <h4>Now</h4>
          <div className="now-details">
            <p className="temprature">
              {Math.round(now.main.temp)}
              <sup>&deg;</sup>C
            </p>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/weather_icons/${now.weather[0]?.icon}.png`}
              alt=""
            />
          </div>

          <span className="status">
            {now.weather && now.weather[0].description}
          </span>

          <hr />

          <div className="date">
            <i className="fa-regular fa-calendar"></i>
            <span>{formattedDate}</span>
          </div>

          <div className="time">
            <i className="fa-regular fa-clock"></i>
            {currentTime}
          </div>
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <span>
              {now.name}, {now.sys.country}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Now;
