import React, { useState, useEffect } from 'react';
import classes from './Temperature.module.scss';

const Temperature = props => {
  const [isCelsius, setIsCelsius] = useState(true);
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
      style={props.isClickable ? null : { cursor: 'unset' }}
      className={[classes.Temperature, props.class].join(' ')}
      onClick={props.isClickable ? () => setIsCelsius(!isCelsius) : null}>
      <p>
        {isCelsius ? cel : fahr}
        <span>{isCelsius ? '°C' : '°F'}</span>
      </p>
      {props.isClickable ? (
        <p className={classes.text}>
          Click on the temperature
          <br />
          to change it to {isCelsius ? 'Fahrenheit' : 'Celcius'}
        </p>
      ) : null}
    </div>
  );
};

export default Temperature;
