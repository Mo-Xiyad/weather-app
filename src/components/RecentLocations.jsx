const RecentLocations = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="week-container">
        <ul className="week-list">
          <li className="active">
            <i className="day-icon" data-feather="sun" />
            <span className="city-name">City Name</span>
            <span className="day-temp">0°C</span>
          </li>
          <li>
            <i className="day-icon" data-feather="cloud" />
            <span className="city-name">City Name</span>
            <span className="day-temp">0°C</span>
          </li>
          <li>
            <i className="day-icon" data-feather="cloud-snow" />
            <span className="city-name">City Name</span>
            <span className="day-temp">0°C</span>
          </li>
          <li>
            <i className="day-icon" data-feather="cloud-rain" />
            <span className="city-name">City Name</span>
            <span className="day-temp">0°C</span>
          </li>
          <div className="clear" />
        </ul>
      </div>
    </div>
  );
};

export default RecentLocations;
