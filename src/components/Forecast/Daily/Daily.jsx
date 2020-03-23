import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard';

import classes from './Daily.module.scss';

const Daily = props => {
  const unixDateConverter = require('../../../Utils').unixDateConverter;
  // console.log(props.forecast);
  // props.forecast.data.map(d => console.log(d));
  return (
    <div className={classes.Daily}>
      <div className={classes.header}>
        <p>{props.forecast.summary}</p>
      </div>
      <div className={classes.sidescroll}>
        {props.forecast.data.map((d, index) => (
          <ForecastCard
            key={index}
            dateTime={unixDateConverter(d.time)}
            icon={d.icon}
            summary={d.summary}
            temperature={d.temperatureHigh}
          />
        ))}
      </div>
    </div>
  );
};

export default Daily;
