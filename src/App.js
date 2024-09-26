import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { WeatherContextProvider } from "./Context/Weather";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <WeatherContextProvider>
        <Navbar />
        <Home />
        <Footer />
      </WeatherContextProvider>
    </>
  );
}

export default App;
