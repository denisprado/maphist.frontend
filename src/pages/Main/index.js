import React from 'react';
import { useSelector } from 'react-redux';
import TeamSwitcher from '../../components/TeamSwitcher';
import { Container } from './styles';
import Projects from '../../components/Projects';
import ProjectContent from '../../components/ProjectContent';

function Main() {
  const activeTeam = useSelector((state) => state.teams.active);
  return (
    <Container>
      <TeamSwitcher />
      <Projects />
      {activeTeam ? <ProjectContent /> : null}
    </Container>
  );
}

export default Main;
