import { faPhotoVideo, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilesActions from '../../store/ducks/files';
import MembersActions from '../../store/ducks/members';
import ProjectsActions from '../../store/ducks/projects';
import Button from '../../styles/components/Buttons';
import Can from '../Can';
import Members from '../Members';
import Modal from '../Modal';
import { Tools, ToolsIcon } from '../ProjectContent/styles';
import ProjectCreateModal from '../ProjectCreateModal';
import UploadFiles from '../UploadFiles';
import { Container, Project } from './styles';

function Projects() {
  const projects = useSelector((state) => state.projects);
  const selectedProject = useSelector((state) => state.projects.active);
  const members = useSelector((state) => state.members);
  const activeTeam = useSelector((state) => state.teams.active);
  const modalUploadOpen = useSelector((state) => state.files.modalUploadOpen);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(ProjectsActions.openProjectModal());
  };

  const handleSelectProject = (project) => {
    dispatch(ProjectsActions.selectProject(project));
  };

  function setMapView() {
    dispatch(ProjectsActions.selectProject(null));
    dispatch(ProjectsActions.setMapView());
  }

  function handleClickDeleteProject(project) {
    dispatch(ProjectsActions.deleteProjectRequest(project));
  }

  const handleClickUploadFiles = () => {
    dispatch(FilesActions.openModalUpload());
  };

  if (!activeTeam) return null;

  return (
    <>
      <Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Button onClick={setMapView}>Mapview</Button>
            <Can checkPermission="projects_create">
              <Button onClick={handleOpenModal}>+ Novo</Button>
            </Can>
            <Button
              onClick={() => {
                dispatch(MembersActions.openMembersModal());
              }}
            >
              Membros
            </Button>
          </div>
        </header>

        {projects.data.map((project) => (
          <Project
            key={project.id}
            onClick={() => handleSelectProject(project)}
            active={
              selectedProject
                ? selectedProject.id === project.id
                  ? 'active'
                  : null
                : null
            }
          >
            {project.title}
            <Tools>
              <ToolsIcon>
                <FontAwesomeIcon
                  onClick={() => handleClickUploadFiles(project)}
                  icon={faPhotoVideo}
                />
              </ToolsIcon>
              <ToolsIcon>
                <FontAwesomeIcon
                  onClick={() => handleClickDeleteProject(project)}
                  icon={faTrash}
                />
              </ToolsIcon>
            </Tools>
          </Project>
        ))}
        <ProjectCreateModal />
        {members.memberModalOpen && <Members />}
        {modalUploadOpen ? (
          <Modal>
            <UploadFiles />
          </Modal>
        ) : null}
      </Container>
    </>
  );
}

export default Projects;
