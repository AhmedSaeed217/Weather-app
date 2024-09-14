import React from "react";
import "./Home.css";
import Now from "../../Components/Now/Now";
import Forecast from "../../Components/Forecast/Forecast";
import Highlights from "../../Components/Highlights/Highlights";
import Today from "../../Components/Today/Today";
function Home() {
  return (
    <div className="home">
      <div className="container">
        <aside>
          <Now />
          <Forecast />
        </aside>

        <main>
          <Highlights />
          <Today />
        </main>
      </div>
    </div>
  );
}

export default Home;
