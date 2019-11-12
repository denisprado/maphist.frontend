import React from 'react';
import { useSelector } from 'react-redux';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

// import { Container } from './styles';

function CheckBoxCategories() {
  const categories = useSelector((state) => state.categories);
  const projects = useSelector((state) => state.projects);
  const categoriesOption = categories.data.map((cat) => ({
    value: cat.id,
    label: cat.title,
  }));

  console.log(categories.data);
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={categoriesOption}
    />
  );
}

export default CheckBoxCategories;
