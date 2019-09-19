import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MembersActions from '../../store/ducks/members';
import ProjectsActions from '../../store/ducks/projects';
import Button from '../../styles/components/Buttons';
import Members from '../Members';
import Modal from '../Modal';
import { ModalForm, ModalInput } from '../Modal/styles';
import { Container, ProjectContent } from './styles';
import Can from '../Can';

function Projects() {
  const projects = useSelector((state) => state.projects);
  const activeTeam = useSelector((state) => state.teams.active);

  const dispatch = useDispatch();

  if (!activeTeam) return null;

  return (
    <Container>
      {projects.data.map((project) => (
        <ProjectContent key={project.id}>
          <p>{project.title}</p>
          <p>{project.description}</p>
          <p>{project.lat}</p>
          <p>{project.lng}</p>
        </ProjectContent>
      ))}
    </Container>
  );
}

export default Projects;
