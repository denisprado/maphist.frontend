import React from 'react';
import { useSelector } from 'react-redux';
import TeamSwitcher from '../../components/TeamSwitcher';
import { Container } from './styles';
import Map from '../../components/Map';
// import { Container } from './styles';

function MapView() {
  const activeTeam = useSelector((state) => state.teams.active);
  return (
    <Container>
      <TeamSwitcher />
      {activeTeam ? <Map /> : null}
    </Container>
  );
}

export default MapView;
