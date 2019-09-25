import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, DeleteIcon } from './styles';
import ProjectActions from '../../store/ducks/projects';
import MapWithMarker from '../MapWithMarker';
import keysToCamel from '../../resources/helpers';

function ProjectContent() {
  const dispatch = useDispatch();
  const p = keysToCamel(useSelector((state) => state.projects.active));

  const handleClickDeleteProject = (project) => {
    dispatch(ProjectActions.deleteProjectRequest(project));
  };

  return p ? (
    <Container>
      <header>
        <h1>{p.title}</h1>
        <DeleteIcon>
          <FontAwesomeIcon
            onClick={() => handleClickDeleteProject(p)}
            icon={faTrash}
          />
        </DeleteIcon>
      </header>
      <h3>{`${p.startYear} - ${p.endYear}`}</h3>
      <MapWithMarker />
      <p>{p.description}</p>
      <p>{`Lat: ${p.lat} Lng: ${p.lng}`}</p>
    </Container>
  ) : null;
}

export default ProjectContent;
