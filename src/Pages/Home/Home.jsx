import React from "react";
import "./Home.css";
import Now from "../../Components/Now/Now";
import Forecast from "../../Components/Forecast/Forecast";
import Highlights from "../../Components/Highlights/Highlights";
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
        </main>
      </div>
    </div>
  );
}

export default Home;
