/** @format */

import React, { useState } from "react";
// import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  FullscreenControl,
  Map,
  Marker,
  NavigationControl,
} from "react-map-gl";
const MapBoxFunction = ({ lat, lg, placeType }) => {
  // const [lat, setLat] = useState(23.7946);
  // const [lng, setLong] = useState(90.406);
  // const { lat, longi } = props;
  // console.log(lat, longi);
  // const lat = 23.76024811036424;
  // const longi = 90.36105114959472;
  // console.log(lat + "From marker");
  // console.log(lg + "From marker");
  return (
    <div>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoic21zaGFyaXllciIsImEiOiJjbGZtZjRueWEwYW16M3dtbTRuenBuMng3In0.Djh9Xo74MHda0QMlqoEX8w"
        initialViewState={{
          latitude: lat,
          longitude: lg,
          zoom: 15,
        }}
        style={{ width: "100vh", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9">
        <Marker
          color={placeType === "Office" ? "red" : "green"}
          latitude={lat}
          longitude={lg}></Marker>
        <FullscreenControl className="z-50" position="top-left" />
        <NavigationControl position="top-left"></NavigationControl>
      </Map>
    </div>
  );
};

export default MapBoxFunction;
