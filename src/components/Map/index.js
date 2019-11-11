import React, { useState, useEffect } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../styles/components/Buttons';
import ProjectsActions from '../../store/ducks/projects';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Container, MapHeader, ContainerProjectContent } from './styles';
import ProjectContent from '../ProjectContent';

function Map() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const selectedProject = useSelector((state) => state.projects.active);
  const [lat, setLat] = useState(-22.9474984);
  const [lng, setLng] = useState(-47.0879169);

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
    zoom: 12,
  });

  function handleSetList() {
    dispatch(ProjectsActions.setListView());
  }

  const _onViewportChange = (viewport) => setViewPort({ ...viewport, transitionDuration: 30 });

  const handleSelectProject = (project) => {
    dispatch(ProjectsActions.selectProject(project));
  };

  // handleClickMap = async e => {
  //   const [longitude, latitude] = e.lngLat;
  //   const { openModal } = this.props;

  //   await openModal({ latitude, longitude });
  // };

  return (
    projects && (
      <Container>
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/denisforigo/ck2to0j2s5jo31do1s4s94bwx"
          onViewportChange={_onViewportChange}
          // onClick={this.handleClickMap}
          mapboxApiAccessToken="pk.eyJ1IjoiZGVuaXNmb3JpZ28iLCJhIjoiY2p2b2Q1eTV6MThwYzN5bnR4Z3BhaHMxMSJ9.fv6R6cp122BKk6B781-z2A"
        >
          <MapHeader>
            <Button onClick={handleSetList}>Lista</Button>
          </MapHeader>

          {projects.data.map((project) => (
            <Marker
              key={project.id}
              latitude={parseFloat(project.lat)}
              longitude={parseFloat(project.lng)}
              captureClick
            >
              <Button filled onClick={() => handleSelectProject(project)}>
                <img
                  style={{ borderRadius: '50%' }}
                  src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${project.title}`}
                  alt={project.title}
                  width="50px"
                  height="50px"
                />
              </Button>
            </Marker>
          ))}
        </MapGL>
        {selectedProject && (
          <ContainerProjectContent>
            <ProjectContent showMap={false} />
          </ContainerProjectContent>
        )}
      </Container>
    )
  );
}

export default Map;
