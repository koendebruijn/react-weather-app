import React, { useState } from 'react';
import classes from './Temperature.module.scss';

const Temperature = props => {
  const [isCelsius, setIsCelsius] = useState(false);
  const [fahr, setFahr] = useState(Math.floor(props.temperature));
  const [cel, setCel] = useState(
    Math.floor((props.temperature - 32) * (5 / 9))
  );

  return (
    <div className={[classes.Temperature, props.class].join(' ')}>
      <p onClick={() => setIsCelsius(!isCelsius)}>
        {isCelsius ? cel : fahr}
        <span>{isCelsius ? '°C' : '°F'}</span>
      </p>
    </div>
  );
};

export default Temperature;
