import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Search from "./Search";
import RecentLocations from "./RecentLocations";
import Card from "./Card";
import MyComponent from "./Map";
const Home = () => {
  const { currentSearchLocation } = useSelector((state) => state);
  const { searchHistoryLocation: data } = useSelector((state) => state);

  useEffect(() => {}, [data.data]);

  return (
    <>
      {currentSearchLocation.data.length > 0 ? (
        <>
          <div className="mt-5">
            <MyComponent />
          </div>
          <div className="mt-5">
            <Search />
            <Card />
            <RecentLocations />
          </div>
        </>
      ) : (
        <>
          <Search />
        </>
      )}
    </>
  );
};
export default Home;
