import React, { useState } from 'react';
import { Container } from './styles';
import RangeYears from './RangeYears';
import CheckBoxCategories from './CheckBoxCategories';

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
