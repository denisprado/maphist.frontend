import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MembersActions from '../../store/ducks/members';
import ProjectsActions from '../../store/ducks/projects';
import Button from '../../styles/components/Buttons';
import ProjectContent from '../ProjectContent';
import Members from '../Members';
import Modal from '../Modal';
import { ModalForm, ModalInput } from '../Modal/styles';
import { Container, Project } from './styles';
import Can from '../Can';

function Projects() {
  const projects = useSelector((state) => state.projects);
  const selectedProject = useSelector((state) => state.project);
  const members = useSelector((state) => state.members);
  const activeTeam = useSelector((state) => state.teams.active);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(ProjectsActions.openProjectModal());
  };

  const handleNewProjectSubmit = (data) => {
    dispatch(ProjectsActions.createProjectRequest(data.name));
  };

  const handleSelectProject = (id) => {
    dispatch(ProjectsActions.getProjectRequest(id));
    console.log(selectedProject);
  };

  if (!activeTeam) return null;

  return (
    <Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
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
          onClick={() => handleSelectProject(project.id)}
        >
          {project.title}
        </Project>
      ))}

      {projects.projectModalOpen && (
        <Modal>
          <h1>Criar projeto</h1>
          <ModalForm onSubmit={handleNewProjectSubmit}>
            <span>NOME</span>
            <ModalInput name="name" />

            <span>Latitude</span>
            <ModalInput name="lat" />

            <span>Longitude</span>
            <ModalInput name="lat" />

            <span>Description</span>
            <ModalInput multiline rows="5" name="description" />

            <Button size="big" type="submit">
              Salvar
            </Button>
            <Button
              onClick={() => {
                dispatch(ProjectsActions.closeProjectModal());
              }}
              size="small"
              color="gray"
            >
              Cancelar
            </Button>
          </ModalForm>
        </Modal>
      )}

      {members.memberModalOpen && <Members />}
    </Container>
  );
}

export default Projects;
