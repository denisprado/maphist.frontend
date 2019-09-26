import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faTrash, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, ToolsIcon, Tools } from './styles';
import ProjectActions from '../../store/ducks/projects';
import FilesActions from '../../store/ducks/files';
import MapWithMarker from '../MapWithMarker';
import keysToCamel from '../../resources/helpers';
import UploadFiles from '../UploadFiles';
import Modal from '../Modal';

function ProjectContent() {
  const dispatch = useDispatch();
  const p = keysToCamel(useSelector((state) => state.projects.active));
  const modalUploadOpen = useSelector((state) => state.files.modalUploadOpen);

  const handleClickDeleteProject = (project) => {
    dispatch(ProjectActions.deleteProjectRequest(project));
  };

  const handleClickUploadFiles = () => {
    dispatch(FilesActions.openModalUpload());
  };

  return p ? (
    <>
      <Container>
        <header>
          <h1>{p.title}</h1>
          <Tools>
            <ToolsIcon>
              <FontAwesomeIcon
                onClick={() => handleClickUploadFiles(p)}
                icon={faPhotoVideo}
              />
            </ToolsIcon>
            <ToolsIcon>
              <FontAwesomeIcon
                onClick={() => handleClickDeleteProject(p)}
                icon={faTrash}
              />
            </ToolsIcon>
          </Tools>
        </header>
        <h3>{`${p.startYear} - ${p.endYear}`}</h3>
        <MapWithMarker />
        <p>{p.description}</p>
        <p>{`Lat: ${p.lat} Lng: ${p.lng}`}</p>
      </Container>
      {modalUploadOpen ? (
        <Modal>
          <UploadFiles />
        </Modal>
      ) : null}
    </>
  ) : null;
}

export default ProjectContent;
