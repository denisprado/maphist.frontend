import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

function valuetext(value) {
  return `${value}`;
}
export default function RangeSlider() {
  const [value, setValue] = React.useState([1500, 2019]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography id="range-slider" gutterBottom>
        Período
      </Typography>
      <Slider
        min={1500}
        max={2019}
        valueLabelDisplay="on"
        value={value}
        onChange={handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
