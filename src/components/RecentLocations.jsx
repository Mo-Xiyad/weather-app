import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { useEffect } from "react";

const RecentLocations = () => {
  const [searcheHistoryData, setSearchHistoryData] = useState();
  const { searchHistoryLocation: data } = useSelector((state) => state);

  useEffect(() => {
    setSearchHistoryData(data.data.reverse().slice(0, 4));
    console.log(searcheHistoryData);
  }, [data.data]);
  return (
    <>
      {
        searcheHistoryData && (
          <div className="d-flex justify-content-center mt-5">
            <div className="week-container">
              <ul className="week-list">
                {searcheHistoryData.map((data) => (
                  <li className="active mr-5">
                    <i className="day-icon" data-feather="cloud" />
                    <span className="city-name">{data?.name}</span>
                    <span className="day-temp">
                      {Math.round(data.main?.feels_like)}°C
                    </span>
                  </li>
                ))}
                <div className="clear" />
              </ul>
            </div>
          </div>
        )

        // : <h1>hello</h1>
      }
      ;
    </>
  );
};

export default RecentLocations;
