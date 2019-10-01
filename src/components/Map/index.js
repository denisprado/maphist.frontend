import React, { useState, useEffect } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import { useSelector } from 'react-redux';

import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const [viewport, setViewPort] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: -22.83,
    longitude: -47.09,
    zoom: 14,
  });

  const _onViewportChange = (viewport) => setViewPort({ ...viewport, transitionDuration: 30 });

  // handleClickMap = async e => {
  //   const [longitude, latitude] = e.lngLat;
  //   const { openModal } = this.props;

  //   await openModal({ latitude, longitude });
  // };

  const projects = useSelector((state) => state.projects);
  console.log(projects);
  return (
    <MapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/dark-v8"
      onViewportChange={_onViewportChange}
      // onClick={this.handleClickMap}
      mapboxApiAccessToken="pk.eyJ1IjoiZGVuaXNmb3JpZ28iLCJhIjoiY2p2b2Q1eTV6MThwYzN5bnR4Z3BhaHMxMSJ9.fv6R6cp122BKk6B781-z2A"
    >
      {projects.data.map((project) => (
        <Marker
          key={project.id}
          latitude={project.lat}
          longitude={project.lng}
          // onClick={this.handleMapClick}
          captureClick
        >
          <img
            style={{
              borderRadius: 100,
              width: 48,
              height: 48,
            }}
            src={project.avatar_url}
            alt={project.name}
          />
        </Marker>
      ))}
    </MapGL>
  );
}

export default Map;
