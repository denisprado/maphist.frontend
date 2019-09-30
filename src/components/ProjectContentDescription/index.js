import React from 'react';
import { useSelector } from 'react-redux';
import keysToCamel from '../../resources/helpers';
import { Container } from './styles';

function ProjectContent() {
  const p = keysToCamel(useSelector((state) => state.projects.active));

  return p ? (
    <>
      <Container>
        <p>{p.description}</p>
        <p>{`Lat: ${p.lat} Lng: ${p.lng}`}</p>
      </Container>
    </>
  ) : null;
}

export default ProjectContent;
