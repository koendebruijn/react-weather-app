import React, { useState } from 'react';
import Currently from './Currently/Currently';
import Minutely from './Minutely/Minutely';
import Hourly from './Hourly/Hourly';
import Daily from './Daily/Daily';
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

  const activeForecastView = () => {
    switch (activeIndex) {
      case ForecastType.currently:
        return <Currently forecast={props.forecast.currently} />;

      case ForecastType.minutely:
        return <Minutely forecast={props.forecast.minutely} />;

      case ForecastType.hourly:
        return <Hourly forecast={props.forecast.hourly} />;

      case ForecastType.daily:
        return <Daily forecast={props.forecast.daily} />;

      default:
        break;
    }
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

      {activeForecastView()}
    </div>
  );
};

export default Forecast;
