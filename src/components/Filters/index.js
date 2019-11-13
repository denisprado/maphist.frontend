import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import RangeYears from './RangeYears';
import CheckBoxCategories from './CheckBoxCategories';
import CategoriesActions from '../../store/ducks/categories';

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
