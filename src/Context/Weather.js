import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [now, setNow] = useState({});
  const [city, setCity] = useState("cairo");
  const [dailyForecast, setDailyForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  const getWeatherNow = () => {
  
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=420a1f1c0d56bff9bd1c42fcf9c808d1&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          setLoading(true);
          setNow(data);
          setLoading(false);
        }).catch((erro)=>{
          
        })
   
    
  };

  const getWeatherFiveDays = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=420a1f1c0d56bff9bd1c42fcf9c808d1&units=metric`)
      .then((res) => res.json())
      .then((data) => {
       // Get today's date and prepare an array for the next five days
       const today = new Date();
       const nextFiveDays = Array.from({ length: 5 }, (_, i) => {
         const date = new Date(today);
         date.setDate(today.getDate() + i+1);
         return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
       });
 
       // Create a map to store the first forecast entry for each day
       const dailyForecast = [];
       const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
 
       data.list.forEach((day) => {
         const dayDate = day.dt_txt.split(' ')[0]; // Get the date part
 
         // Only include the first entry for each day
         if (nextFiveDays.includes(dayDate) && !dailyForecast.some(entry => entry.dt_txt.split(' ')[0] === dayDate)) {
          const date = new Date(day.dt_txt);
          const dayNumber = date.getDate(); // Day of the month
          const monthNumber = date.getMonth() + 1; // Month (0-based index)
          const dayName = date.toLocaleString('default', { weekday: 'long' }); // Full weekday name
          const monthName = monthNames[monthNumber-1]; // Get the month name

          // Add the formatted date components to the daily forecast entry
          dailyForecast.push({
            ...day,
            dayName: dayName,       
            dayNumber: dayNumber,   
            monthName: monthName 
          });
        }
      });
 
       // Convert the daily forecast object to an array
       const forecastArray = Object.values(dailyForecast);
       setDailyForecast(forecastArray)
  })
  };

  



  useEffect(() => {
    getWeatherNow();
    getWeatherFiveDays();
  }, [city]);

  return (
    <WeatherContext.Provider value={{ now, loading, setCity, city,dailyForecast }}>
      {children}
    </WeatherContext.Provider>
  );
};
