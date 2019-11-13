import React from 'react';
import CheckBoxCategories from './CheckBoxCategories';
import RangeYears from './RangeYears';
import { Container } from './styles';

function Filters() {
  return (
    <Container>
      <h2>Filtros</h2>
      <RangeYears />
      <CheckBoxCategories />
    </Container>
  );
}

export default Filters;
