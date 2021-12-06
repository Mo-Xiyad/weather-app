import React from "react";
import GoogleMapReact from "google-map-react";
import { GoLocation } from "react-icons/go";
import { useSelector } from "react-redux";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = (map) => {
  const { currentSearchLocation } = useSelector((state) => state);
  const data = currentSearchLocation.data[0];

  const defaultProps = {
    center: { lat: data.coord.lat, lng: data.coord.lon },
    zoom: 12,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "30vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_JS_MAPS_API_KEY,
          language: "en",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={data.coord.lat}
          lng={data.coord.lon}
          text={<GoLocation />}
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
