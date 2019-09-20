import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';

function ProjectContent() {
  const project = useSelector((state) => state.project);

  return (
    project && (
      <Container>
        <p>{project.title}</p>
        <p>{project.description}</p>
        <p>{project.lat}</p>
        <p>{project.lng}</p>
      </Container>
    )
  );
}

export default ProjectContent;
