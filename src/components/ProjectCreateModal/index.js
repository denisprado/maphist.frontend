import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import ProjectsActions from '../../store/ducks/projects';
import { ModalForm, ModalInput } from '../Modal/styles';
import Button from '../../styles/components/Buttons';

// import { Container } from './styles';

function ProjectCreateModal() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  function handleNewProjectSubmit({
    title,
    description,
    lat,
    lng,
    startYear,
    endYear,
  }) {
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
  }

  return projects.projectModalOpen ? (
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
  ) : null;
}

export default ProjectCreateModal;
