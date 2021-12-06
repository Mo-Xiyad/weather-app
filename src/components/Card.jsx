import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { dateBuilder, getDay, sunRiseAndSetTIme } from "../helpers";

const Card = () => {
  const { currentSearchLocation } = useSelector((state) => state);
  const data = currentSearchLocation.data[0];
  useEffect(() => {
    // console.log("here is data", currentSearchLocation.data[0]);
    // console.log("here is data", currentSearchLocation.data);
    console.log("here is data", data);
  }, []);
  return (
    <div className="container-1">
      <div className="weather-side mr-5">
        <div className="weather-gradient" />
        <div className="date-container">
          <h2 className="date-dayname">{getDay(new Date())}</h2>
          <span className="date-day">{dateBuilder(new Date())}</span>
          <i className="location-icon" data-feather="map-pin" />
          <span className="location">
            {data.name}, {data.sys?.country}
          </span>
        </div>
        <div className="weather-container">
          <i className="weather-icon" data-feather="sun" />
          <h1 className="weather-temp">{Math.round(data.main?.temp)}°C</h1>
          <h3 className="weather-desc">
            {data.weather && data.weather[0].main}
          </h3>
        </div>
      </div>
      <div className="info-side">
        <div className="today-info-container">
          <div className="today-info">
            <div className="precipitation">
              {" "}
              <span className="title">CLOUDY</span>
              <span className="value">{data.clouds?.all} %</span>
              <div className="clear" />
            </div>
            <div className="humidity">
              {" "}
              <span className="title">HUMIDITY</span>
              <span className="value">{data.main?.humidity} %</span>
              <div className="clear" />
            </div>
            <div className="wind">
              {" "}
              <span className="title">WIND</span>
              <span className="value">{data.wind?.speed} km/h</span>
              <div className="clear" />
            </div>
          </div>
        </div>
        <div className="week-container">
          <ul className="week-list">
            <li className="">
              <i className="day-icon" data-feather="sun" />
              <span className="city-name">Feels like</span>
              <span className="day-temp">
                {Math.round(data.main?.feels_like)}°C
              </span>
            </li>
            <li>
              <i className="day-icon" data-feather="cloud" />
              <span className="city-name">Max Temp</span>
              <span className="day-temp">
                {Math.round(data.main?.temp_max)}°C
              </span>
            </li>
            <li>
              <i className="day-icon" data-feather="cloud-snow" />
              <span className="city-name">Sunrise</span>
              <span className="day-temp">
                {sunRiseAndSetTIme(data.sys?.sunrise)}
              </span>
            </li>
            <li>
              <i className="day-icon" data-feather="cloud-rain" />
              <span className="city-name">Sunset</span>
              <span className="day-temp">
                {sunRiseAndSetTIme(data.sys?.sunset)}
              </span>
            </li>
            <div className="clear" />
          </ul>
        </div>
        <div className="location-container">
          <button className="location-button">
            {" "}
            <i data-feather="map-pin" />
            <span>{data.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
