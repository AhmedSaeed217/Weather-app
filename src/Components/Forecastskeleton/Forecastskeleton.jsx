import React from 'react';
import './Forecastskeleton.css';

const Forecastskeleton = () => {
  return (
    <div class="forecast">
    <h3></h3>
    <div class="forecast-days">
        <div class="day-details skeleton">
            <div class="temp">
                <div class="skeleton-img"></div>
                <div class="skeleton-temp"></div>
            </div>
            <div class="date skeleton"></div>
            <div class="day skeleton"></div>
        </div>
        <div class="day-details skeleton">
            <div class="temp">
                <div class="skeleton-img"></div>
                <div class="skeleton-temp"></div>
            </div>
            <div class="date skeleton"></div>
            <div class="day skeleton"></div>
        </div>
        <div class="day-details skeleton">
            <div class="temp">
                <div class="skeleton-img"></div>
                <div class="skeleton-temp"></div>
            </div>
            <div class="date skeleton"></div>
            <div class="day skeleton"></div>
        </div>
        <div class="day-details skeleton">
            <div class="temp">
                <div class="skeleton-img"></div>
                <div class="skeleton-temp"></div>
            </div>
            <div class="date skeleton"></div>
            <div class="day skeleton"></div>
        </div>
        <div class="day-details skeleton">
            <div class="temp">
                <div class="skeleton-img"></div>
                <div class="skeleton-temp"></div>
            </div>
            <div class="date skeleton"></div>
            <div class="day skeleton"></div>
        </div>
    </div>
</div>
  );
};

export default Forecastskeleton;