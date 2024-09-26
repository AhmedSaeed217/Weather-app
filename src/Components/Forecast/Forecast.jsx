import React, { useContext } from "react";
import "./Forecast.css";
import { WeatherContext } from "../../Context/Weather";
import Forecastskeleton from "../Forecastskeleton/Forecastskeleton";
export default function Forecast() {
  const{dailyForecast,loading}=useContext(WeatherContext);
  

  return <>
  {loading?<Forecastskeleton/>: <div className="forecast">
    <h3>5 Days Forecast</h3>
    <div className="forecast-days">
      {dailyForecast.map((day,index)=><div key={index} className="day-details">
        <div className="temp">
          <img src={`${process.env.PUBLIC_URL}/assets/images/weather_icons/${day.weather[0]?.icon}.png`} alt="" />
          <span>
            {Math.round(day.main.temp)}<sup>&deg;</sup>
          </span>
        </div>
          
        <div className="date">
          <span>{day.dayNumber} {day.monthName.slice(0,3)}</span>
        </div>

        <div className="day">
          <span>{day.dayName}</span>
        </div>
      </div>
      )
      
      }
    </div>
  </div>}
  
  
  </>
}
