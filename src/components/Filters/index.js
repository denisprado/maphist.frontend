import React, { useState } from 'react';
import { Container } from './styles';
import RangeYears from './RangeYears';

function Filters() {
  const [date, setDate] = useState([new Date(), new Date()]);

  return (
    <Container>
      <h2>Filtros</h2>
      <label htmlFor="ano">Ano de início</label>
      <RangeYears />
    </Container>
  );
}

export default Filters;
