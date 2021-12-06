import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Search from "./Search";
import RecentLocations from "./RecentLocations";
import Card from "./Card";
import MyComponent from "./Map";
import { IncurrentSearch } from "../types/IcurrentSearch";
import { InititalStates } from "../redux/store";

const Home = () => {
  const { currentSearchLocation } = useSelector(
    (state: InititalStates) => state
  );
  const { searchHistoryLocation: data } = useSelector(
    (state: InititalStates) => state
  );

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
          </div>
          <RecentLocations />
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
