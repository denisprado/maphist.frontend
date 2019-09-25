import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MembersActions from '../../store/ducks/members';
import ProjectsActions from '../../store/ducks/projects';
import Button from '../../styles/components/Buttons';
import Members from '../Members';
import Modal from '../Modal';
import { ModalForm, ModalInput } from '../Modal/styles';
import { Container, Project } from './styles';
import Can from '../Can';

function Projects() {
  const projects = useSelector((state) => state.projects);
  const selectedProject = useSelector((state) => state.projects.active);
  const members = useSelector((state) => state.members);
  const activeTeam = useSelector((state) => state.teams.active);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(ProjectsActions.openProjectModal());
  };

  const handleNewProjectSubmit = ({
    title,
    description,
    lat,
    lng,
    startYear,
    endYear,
  }) => {
    dispatch(
      ProjectsActions.createProjectRequest(
        title,
        description,
        lat,
        lng,
        startYear,
        endYear,
      ),
    );
  };

  const handleSelectProject = (project) => {
    dispatch(ProjectsActions.selectProject(project));
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
        <>
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
          </Project>
        </>
      ))}

      {projects.projectModalOpen && (
        <Modal size="big">
          <h1>Criar projeto</h1>
          <ModalForm onSubmit={handleNewProjectSubmit}>
            <span>Nome</span>
            <ModalInput name="title" />
            <div>
              <span>
                Latitude
                <ModalInput name="lat" />
              </span>

              <span>
                Longitude
                <ModalInput name="lng" />
              </span>
            </div>
            <div>
              <span>
                Ano Inicial
                <ModalInput name="startYear" />
              </span>
              <span>
                Ano Final
                <ModalInput name="endYear" />
              </span>
            </div>

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
