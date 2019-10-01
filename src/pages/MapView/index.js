import React from 'react';
import { useSelector } from 'react-redux';
import TeamSwitcher from '../../components/TeamSwitcher';
import { Container } from './styles';
import Map from '../../components/Map';
// import { Container } from './styles';

function MapView() {
  return (
    <Container>
      <TeamSwitcher />
      <Map />
    </Container>
  );
}

export default MapView;
