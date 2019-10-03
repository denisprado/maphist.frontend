import React, { useState, useEffect } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import { useSelector } from 'react-redux';

import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const projects = useSelector((state) => state.projects);

  const [lat, setLat] = useState(-22.83);
  const [lng, setLng] = useState(-47.09);

  useEffect(() => {
    const arrayLat = projects.data.map((project) => Number(project.lat));
    const arrayLng = projects.data.map((project) => Number(project.lng));
    const maxArrayLatAbs = arrayLat.map((lat) => Math.abs(lat));
    const maxArrayLngAbs = arrayLng.map((lng) => Math.abs(lng));
    const maxLat = Math.max(...maxArrayLatAbs);
    const maxLng = Math.max(...maxArrayLngAbs);

    setLat(maxLat);
    setLng(maxLng);
  }, [projects.data]);

  const [viewport, setViewPort] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: lat,
    longitude: lng,
    zoom: 14,
  });

  const _onViewportChange = (viewport) =>
    setViewPort({ ...viewport, transitionDuration: 30 });

  // handleClickMap = async e => {
  //   const [longitude, latitude] = e.lngLat;
  //   const { openModal } = this.props;

  //   await openModal({ latitude, longitude });
  // };

  return (
    projects && (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/denisforigo/ck1atos062i7o1cnb3hrssml2"
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
    )
  );
}

export default Map;
