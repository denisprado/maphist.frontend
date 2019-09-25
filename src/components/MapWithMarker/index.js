import React from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import { MapContainer } from "./styles";
import Marker from "../Marker";

function MapWithMarker() {
  const p = useSelector(state => state.projects.active);
  const defaultMap = {
    center: {
      lat: p.lat && -22.8948443,
      lng: p.lng && -47.1711201
    },
    zoom: 9
  };
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBGO0SzrFwMx2ejduvvcEmvJU6pQrDW6Wo" }}
        defaultCenter={defaultMap.center}
        defaultZoom={defaultMap.zoom}
      >
        <Marker lat={p.lat} lng={p.lng} text={p.title} />
      </GoogleMapReact>
    </MapContainer>
  );
}

export default MapWithMarker;
