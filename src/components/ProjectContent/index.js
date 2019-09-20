import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import MapWithMarker from '../MapWithMarker';

function ProjectContent() {
  const p = useSelector((state) => state.projects.project);
  console.log('PROJECTS: ' + p);
  return p ? (
    <Container>
      <h1>{p.title}</h1>
      <MapWithMarker />
      <p>{p.description}</p>
      <p>{`Lat: ${p.lat}`}</p>
      <p>{`Lng: ${p.lng}`}</p>
    </Container>
  ) : null;
}

export default ProjectContent;
