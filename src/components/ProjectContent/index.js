import { faPhotoVideo, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import keysToCamel from '../../resources/helpers';
import FilesActions from '../../store/ducks/files';
import ProjectActions from '../../store/ducks/projects';
import MapWithMarker from '../MapWithMarker';
import Modal from '../Modal';
import UploadFiles from '../UploadFiles';
import ProjectContentDescription from '../ProjectContentDescription';

import {
  Container,
  Tools,
  ToolsIcon,
  ProjectHeader,
  ProjectBody,
  ProjectContentMapAndDescription,
} from './styles';
import ProjectContentfiles from '../ProjectContentFiles';

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
        <ProjectHeader>
          <div>
            <h1>{p.title}</h1>
            <h3>{`${p.startYear} - ${p.endYear}`}</h3>
          </div>
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
        </ProjectHeader>
        <ProjectBody>
          <ProjectContentMapAndDescription>
            <MapWithMarker />

            <ProjectContentDescription />
          </ProjectContentMapAndDescription>
          <ProjectContentfiles />
        </ProjectBody>
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
