import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
// import { useEffect } from "react";

const RecentLocations = () => {
  //const [searcheHistoryData, setSearchHistoryData] = useState();
  const { searchHistoryLocation: data } = useSelector((state) => state);

  return (
    <>
      {
        <div className="container-fluid mt-5 recent-loc-div">
          <div className="row justify-content-center">
            {data.data.slice(0, 3).map((data, i) => (
              <div key={i} className="col-12 col-md-4 col-sm-12 col-xs-12">
                <div className="card-recent p-4">
                  <div className="d-flex">
                    <h6 className="flex-grow-1">{data?.name}</h6>
                  </div>
                  <div className="d-flex flex-column temp mt-5 mb-3">
                    <h1 className="mb-0 font-weight-bold" id="heading">
                      {Math.round(data.main?.temp)}° C{" "}
                    </h1>{" "}
                    <span className="small grey">
                      {data.weather && data.weather[0].description}
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="temp-details flex-grow-1">
                      <p className="my-1">
                        {" "}
                        <Image
                          src="https://i.imgur.com/B9kqOzp.png"
                          height="17px"
                        />{" "}
                        <span> {data.wind?.speed} km/h </span>{" "}
                      </p>
                      <p className="my-1">
                        {" "}
                        <i
                          className="fa fa-tint mr-2"
                          aria-hidden="true"
                        />{" "}
                        <span> {data.main?.humidity}% </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default RecentLocations;
