import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesActions from '../../../store/ducks/categories';
import ProjectsActions from '../../../store/ducks/projects';
import CheckBox from '../../../styles/components/Checkbox';

export default function CrossoutCheckbox({ text, valueOption }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CategoriesActions.getCategoriesRequest());
  }, [dispatch]);

  // All categories checkbox array
  const categoriesState = useSelector((state) => state.categories.data);
  const [categoriesIds, setCategoriesIds] = useState([1]);

  const allCategories = categoriesState.map((cat) => ({
    id: cat.id,
    value: cat.title,
    isChecked: !categoriesIds.indexOf(cat.id),
  }));

  function handleCheckChieldElement(event) {
    const category = categoriesState.filter(
      (cat) => cat.id === event.target.value,
    );
    category.map({ isChecked: true });

    setCategoriesIds();
  }

  return (
    <>
      <p>Categorias</p>
      <ul>
        {categories.map((cat, index) => (
          <CheckBox
            key={index}
            handleCheckChieldElement={handleCheckChieldElement}
            {...cat}
          />
        ))}
      </ul>
    </>
  );
}
