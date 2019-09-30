import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import keysToCamel from '../../resources/helpers';
import { Container, Thumb } from './styles';

function ProjectContentFiles() {
  const p = keysToCamel(useSelector((state) => state.projects.active));

  const { files } = p;

  return p ? (
    <Container>
      {files && files.map((file) => <Thumb key={file.id} image={file.url} />)}
    </Container>
  ) : null;
}

export default ProjectContentFiles;
