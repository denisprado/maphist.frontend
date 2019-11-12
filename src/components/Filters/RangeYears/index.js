import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDispatch, useSelector } from 'react-redux';
import ProjectActions from '../../../store/ducks/projects';

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const dispatch = useDispatch();

  const { date } = useSelector((state) => state.projects.filter);

  // console.log(`${date[0]} -> ${date[1]}`);
  const handleChange = (event, newValue) => {
    dispatch(ProjectActions.setProjectFilter({ date: newValue }));
  };

  return (
    <div>
      <Slider
        min={1700}
        max={2019}
        valueLabelDisplay="auto"
        onChange={handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        value={[date[0], date[1]]}
      />
      <Typography id="range-slider" gutterBottom>
        {`${date[0]} a ${date[1]}`}
      </Typography>
    </div>
  );
}
