import React from "react";
import "./Nowskeleton.css";
function Nowskeleton() {
  return (
    <div class="weather-widget skeleton">
      <h4 class="skeleton-text"></h4>
      <div class="weather-details">
        <p class="temperature skeleton-text"></p>
        <div class="skeleton-image"></div>
      </div>

      <span class="weather-status skeleton-text"></span>

      <hr />

      <div class="date skeleton-text"></div>
      <div class="time skeleton-text"></div>
      <div class="location skeleton-text"></div>
    </div>
  );
}

export default Nowskeleton;
