import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MembersActions from '../../store/ducks/members';
import ProjectsActions from '../../store/ducks/projects';
import Button from '../../styles/components/Buttons';
import Members from '../Members';
import Modal from '../Modal';
import { ModalForm, ModalInput } from '../Modal/styles';
import { Container, Project } from './styles';

function Projects() {
  const projects = useSelector((state) => state.projects);
  const members = useSelector((state) => state.members);
  const activeTeam = useSelector((state) => state.teams.active);

  const dispatch = useDispatch();

  const listProjects = () => {
    dispatch(ProjectsActions.getProjectsRequest());
  };

  const handleOpenModal = () => {
    dispatch(ProjectsActions.openProjectModal());
  };

  const handleNewProjectSubmit = (data) => {
    dispatch(ProjectsActions.createProjectRequest(data.name));
  };

  useEffect(() => {
    listProjects();
  }, [activeTeam]);

  if (!activeTeam) return null;

  return (
    <Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
          <Button onClick={handleOpenModal}>+ Novo</Button>
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
        <Project key={project.id}>
          <p>{project.title}</p>
        </Project>
      ))}

      {projects.projectModalOpen && (
        <Modal>
          <h1>Criar projeto</h1>
          <ModalForm onSubmit={handleNewProjectSubmit}>
            <span>NOME</span>
            <ModalInput name="name" />

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

Projects.propTypes = {
  openMembersModal: PropTypes.func.isRequired,
  openProjectModal: PropTypes.func.isRequired,
  closeProjectModal: PropTypes.func.isRequired,
  createProjectRequest: PropTypes.func.isRequired,
  activeTeam: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  projects: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    ),
    projectModalOpen: PropTypes.bool,
  }),
};

export default Projects;
