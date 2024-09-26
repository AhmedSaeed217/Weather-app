import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
import { useContext, useState } from "react";
import { WeatherContext } from "../../Context/Weather";
import toast, { Toaster } from 'react-hot-toast';
function Navbar() {
  const { setCity, city } = useContext(WeatherContext);
  const [searchWord, setSearchWord] = useState("");
  const setCityName =(e)=>{
e.preventDefault();
    if(searchWord.length===0){
      // toast.error("Please enter city name")
    }else{
      setCity(searchWord);
              console.log(city);
    }
  }
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>

        <div className="search-box">
         <form onSubmit={setCityName}>
         <input
            onChange={(e) => {
              setSearchWord(e.target.value);
              console.log(searchWord);
            }}
            type="search"
            placeholder="Search City..." 
          />
          
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
         </form>
          
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
