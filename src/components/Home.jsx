import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentCompanyJobList } from "../redux/actions";
import { dateBuilder, getDay, sunRiseAndSetTIme } from "../helpers";
import Search from "./Search";
import RecentLocations from "./RecentLocations";
import AddToStore from "./from";

const Home = () => {
  const [searcheData, setSearchData] = useState();
  const { currentSearchLocation: currentLocation } = useSelector(
    (state) => state
  );
  const { searchHistoryLocation: data } = useSelector((state) => state);
  useEffect(() => {
    console.log();
    setSearchData(data.data.slice(0, 1));
  }, [data.data]);

  return (
    <>
      <Search />
      {data.data ? (
        <div className="container">
          <div className="weather-side mr-5">
            <div className="weather-gradient" />
            <div className="date-container">
              <h2 className="date-dayname">{getDay(new Date())}</h2>
              <span className="date-day">{dateBuilder(new Date())}</span>
              <i className="location-icon" data-feather="map-pin" />
              <span className="location">
                {currentLocation.data.name},{" "}
                {currentLocation.data?.sys?.country}
              </span>
            </div>
            <div className="weather-container">
              <i className="weather-icon" data-feather="sun" />
              <h1 className="weather-temp">
                {Math.round(currentLocation.data.main?.feels_like)}°C
              </h1>
              <h3 className="weather-desc">
                {currentLocation?.data?.weather[0]?.main}
              </h3>
            </div>
          </div>
          <div className="info-side">
            <div className="today-info-container">
              <div className="today-info">
                <div className="precipitation">
                  {" "}
                  <span className="title">CLOUDY</span>
                  <span className="value">
                    {currentLocation.data.clouds?.all} %
                  </span>
                  <div className="clear" />
                </div>
                <div className="humidity">
                  {" "}
                  <span className="title">HUMIDITY</span>
                  <span className="value">
                    {currentLocation.data.main?.humidity} %
                  </span>
                  <div className="clear" />
                </div>
                <div className="wind">
                  {" "}
                  <span className="title">WIND</span>
                  <span className="value">
                    {currentLocation.data.wind?.speed} km/h
                  </span>
                  <div className="clear" />
                </div>
              </div>
            </div>
            <div className="week-container">
              <ul className="week-list">
                <li className="">
                  <i className="day-icon" data-feather="sun" />
                  <span className="city-name">Lowest Temp</span>
                  <span className="day-temp">
                    {Math.round(currentLocation.data.main?.temp_min)}°C
                  </span>
                </li>
                <li>
                  <i className="day-icon" data-feather="cloud" />
                  <span className="city-name">Max Temp</span>
                  <span className="day-temp">
                    {Math.round(currentLocation.data.main?.temp_max)}°C
                  </span>
                </li>
                <li>
                  <i className="day-icon" data-feather="cloud-snow" />
                  <span className="city-name">Sunrise</span>
                  <span className="day-temp">
                    {sunRiseAndSetTIme(currentLocation.data.sys?.sunrise)}
                  </span>
                </li>
                <li>
                  <i className="day-icon" data-feather="cloud-rain" />
                  <span className="city-name">Sunset</span>
                  <span className="day-temp">
                    {sunRiseAndSetTIme(currentLocation.data.sys?.sunset)}
                  </span>
                </li>
                <div className="clear" />
              </ul>
            </div>
            <div className="location-container">
              <button className="location-button">
                {" "}
                <i data-feather="map-pin" />
                <span>{currentLocation.data.name}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Search />
      )}
      <RecentLocations />
    </>
  );
};
export default Home;
