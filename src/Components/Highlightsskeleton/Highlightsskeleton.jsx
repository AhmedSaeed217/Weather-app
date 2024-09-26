import React from "react";
import "./Highlightsskeleton.css";
function Highlightsskeleton() {
  return (
    <div class="highlights">
      <div class="container">
        <h3 class="skeleton-title"></h3>
        <div class="top-highlights">
          <div class="air-quality skeleton-air-quality">
            <div class="air-quality-description skeleton-description">
              <p></p>
              <span></span>
            </div>
            <div class="air-quality-info skeleton-info">
              <div class="item">
                <i class="fa-solid fa-wind"></i>
                <div class="pm">
                  <span></span>
                  <p></p>
                </div>
              </div>
              <div class="item">
                <span></span>
                <p></p>
              </div>
              <div class="item">
                <span></span>
                <p></p>
              </div>
              <div class="item">
                <span></span>
                <p></p>
              </div>
            </div>
          </div>
          <div class="sunrise-sunset skeleton-sunrise-sunset">
            <div class="sunrise-sunset-description skeleton-description">
              <p></p>
            </div>
            <div class="sunrise-sunset-info skeleton-info">
              <div class="sunrise item">
                <i class="fa-regular fa-sun"></i>
                <div class="info">
                  <span></span>
                  <p></p>
                </div>
              </div>
              <div class="sunset item">
                <i class="fa-regular fa-moon"></i>
                <div class="info">
                  <span></span>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-highlights">
          <div class="bottom-highlight-detail skeleton-bottom-detail">
            <span></span>
            <div class="details">
              <i class="fa-solid fa-droplet"></i>
              <p></p>
            </div>
          </div>
          <div class="bottom-highlight-detail skeleton-bottom-detail">
            <span></span>
            <div class="details">
              <i class="fas fa-water"></i>
              <p></p>
            </div>
          </div>
          <div class="bottom-highlight-detail skeleton-bottom-detail">
            <span></span>
            <div class="details">
              <i class="far fa-eye"></i>
              <p></p>
            </div>
          </div>
          <div class="bottom-highlight-detail skeleton-bottom-detail">
            <span></span>
            <div class="details">
              <i class="fas fa-temperature-high"></i>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlightsskeleton;
