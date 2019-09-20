import React from 'react';
import TeamSwitcher from '../../components/TeamSwitcher';
import { Container } from './styles';
import Projects from '../../components/Projects';
import ProjectContent from '../../components/ProjectContent';

function Main() {
  return (
    <Container>
      <TeamSwitcher />
      <Projects />
      <ProjectContent />
    </Container>
  );
}

export default Main;
