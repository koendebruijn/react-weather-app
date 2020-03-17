import React, { useState, useEffect } from 'react';
import classes from './Temperature.module.scss';

const Temperature = props => {
  const [isCelsius, setIsCelsius] = useState(false);
  const [fahr, setFahr] = useState(Math.floor(props.temperature));
  const [cel, setCel] = useState(
    Math.floor((props.temperature - 32) * (5 / 9))
  );

  useEffect(() => {
    setCel(Math.floor((props.temperature - 32) * (5 / 9)));
    setFahr(Math.floor(props.temperature));
  }, [props.temperature]);

  return (
    <div
      className={[classes.Temperature, props.class].join(' ')}
      onClick={() => setIsCelsius(!isCelsius)}>
      <p>
        {isCelsius ? cel : fahr}
        <span>{isCelsius ? '°C' : '°F'}</span>
      </p>
      <p className={classes.text}>
        Click on the temperature
        <br />
        to change it to {isCelsius ? 'Fahrenheit' : 'Celcius'}
      </p>
    </div>
  );
};

export default Temperature;
