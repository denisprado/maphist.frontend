import React from 'react';

import { Container } from './styles';

function Marker({ text }) {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
}

export default Marker;
