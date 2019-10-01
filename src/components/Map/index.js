import React, { useState, useEffect } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import { useSelector } from 'react-redux';

import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const projects = useSelector((state) => state.projects);

  const [latitudes, setLatitudes] = useState(null);

  useEffect(() => {
    const arrayLat = projects.data.map((project) => parseFloat(project.lat));
    const maxArrayAbs = arrayLat.map((lat) => Math.abs(lat));
    const maxArray = Math.max(...maxArrayAbs);

    setLatitudes(maxArray);
  }, [projects.data]);

  console.log('Latitudes: ' + latitudes);

  const [viewport, setViewPort] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: -22.83,
    longitude: -47.09,
    zoom: 14,
  });

  const _onViewportChange = (viewport) =>
    setViewPort({ ...viewport, transitionDuration: 30 });

  // handleClickMap = async e => {
  //   const [longitude, latitude] = e.lngLat;
  //   const { openModal } = this.props;

  //   await openModal({ latitude, longitude });
  // };

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
          latitude={parseFloat(project.lat)}
          longitude={parseFloat(project.lng)}
          // onClick={this.handleMapClick}
          captureClick
        >
          <img
            style={{ borderRadius: '50%' }}
            src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${project.title}`}
            alt={project.title}
            width="50px"
            height="50px"
          />
        </Marker>
      ))}
    </MapGL>
  );
}

export default Map;
