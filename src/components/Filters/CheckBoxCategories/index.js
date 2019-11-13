import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesActions from '../../../store/ducks/categories';
import ProjectsActions from '../../../store/ducks/projects';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    color: '#fff',
    backgroundColor: 'red',
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function CheckBoxCategories() {
  const classes = useStyles();
  const categories = useSelector((state) => state.categories);
  const { filter } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CategoriesActions.getCategoriesRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(event) {
    return (
      event.target.value
      && dispatch(
        ProjectsActions.setProjectFilter({ category_id: event.target.value }),
      )
    );
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <p id="demo-mutiple-checkbox-label">Tag</p>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={filter.category_id}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {categories.data
            && categories.data.map((name) => (
              <MenuItem key={name.id} value={name.id}>
                <Checkbox checked={filter.category_id.indexOf(name.id) > -1} />
                <ListItemText primary={name.title} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
