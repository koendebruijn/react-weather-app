import React, { useState } from 'react';
import classes from './Temprature.modue.scss';

const Temprature = props => {
  const [isCelsius, setIsCelsius] = useState(false);
  const [fahr, setFahr] = useState(Math.floor(props.temprature));
  const [cel, setCel] = useState(Math.floor((props.temprature - 32) * (5 / 9)));

  return (
    <div className={classes.Temprature}>
      <p onClick={() => setIsCelsius(!isCelsius)}>
        {isCelsius ? cel : fahr}
        <span>{isCelsius ? '°C' : '°F'}</span>
      </p>
    </div>
  );
};

export default Temprature;
