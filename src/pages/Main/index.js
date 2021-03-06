import React from 'react';
import { useSelector } from 'react-redux';
import TeamSwitcher from '../../components/TeamSwitcher';
import { Container } from './styles';
import Projects from '../../components/Projects';
import Map from '../../components/Map';
import ProjectContent from '../../components/ProjectContent';

function Main() {
  const activeTeam = useSelector((state) => state.teams.active);
  const mapView = useSelector((state) => state.projects.mapView);
  return (
    <Container>
      {mapView ? <TeamSwitcher show={false} /> : <TeamSwitcher show />}
      {!mapView ? <Projects /> : <Map />}

      {!mapView && activeTeam ? <ProjectContent showMap /> : null}
    </Container>
  );
}

export default Main;
