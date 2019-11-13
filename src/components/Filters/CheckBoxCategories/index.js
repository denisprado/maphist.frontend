import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesActions from '../../../store/ducks/categories';
import ProjectsActions from '../../../store/ducks/projects';

function CrossoutCheckbox({ text, valueOption }) {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.projects);
  const { category_id } = filter;

  const initValues = category_id;

  function handleChange(event) {
    const { checked, value } = event.target;

    const values =      initValues.indexOf(value) > -1 && !checked
        ? initValues.filter((val) => val === value)
        : [...initValues, value];

    dispatch(ProjectsActions.setProjectFilter(values));

    // const addValue = [...values, parseInt(event.target.value)];
    // setValues(addValue);
    console.log(valueOption);
    // valores sem o
    // const filteredValue = values.filter(
    // (value) => parseInt(value.id) !== parseInt(event.target.value),
    // );

    // ProjectsActions.setProjectFilter(parseInt(event.target.value));

    // setValues(event.target.checked ? addValue : filteredValue);
  }

  return (
    <div>
      <label htmlFor={text}>
        <input
          type="checkbox"
          id={text}
          defaultChecked={false}
          onChange={handleChange}
          value={valueOption}
        />
        {text}
      </label>
    </div>
  );
}

export default function CheckBoxCategories() {
  const categories = useSelector((state) => state.categories);
  const { filter } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const [values, setValues] = useState([filter.category_id]);

  useEffect(() => {
    dispatch(CategoriesActions.getCategoriesRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(event) {
    setValues(event.target.value);

    // event.target.value &&
    dispatch(ProjectsActions.setProjectFilter({ category_id: values.shift() }));
  }

  return (
    <div>
      <p id="Categories">Tag</p>
      {categories.data.map((cat) => (
        <CrossoutCheckbox
          key={cat.id}
          text={cat.title}
          valueOption={cat.id}
          checked={false}
        />
      ))}
    </div>
  );
}
