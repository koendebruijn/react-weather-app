import React, { useState } from 'react';
import Currently from './Currently/Currently';
import classes from './Forecast.module.scss';

const Forecast = props => {
  const [activeIndex, setActiveIndex] = useState(0);

  const ForecastType = Object.freeze({
    currently: 0,
    minutely: 1,
    hourly: 2,
    daily: 3
  });

  const handleClick = e => {
    setActiveIndex(parseInt(e.target.getAttribute('data-index')));
  };

  return (
    <div className={classes.Forecast}>
      <div className={classes.btnGroup}>
        {Object.keys(ForecastType).map((key, index) => (
          <div
            className={
              activeIndex === index
                ? [classes.button, classes.active].join(' ')
                : classes.button
            }
            key={key}
            data-index={index}
            onClick={handleClick}>
            {key}
          </div>
        ))}
      </div>

      <Currently currentWeather={props.forecast.currently} />
    </div>
  );
};

export default Forecast;
