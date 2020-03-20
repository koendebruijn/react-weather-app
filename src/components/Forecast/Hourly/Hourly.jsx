import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard';
import classes from './Hourly.module.scss';

const Hourly = props => {
  const convertUnixTimestamp = require('../../../Utils').unixTimeConverter;
  console.log(props.forecast);
  return (
    <div className={classes.Hourly}>
      <div className={classes.sidescroll}>
        {props.forecast.data.map((d, index) => (
          <ForecastCard
            key={index}
            dateTime={convertUnixTimestamp(d.time)}
            icon={d.icon}
            summary={d.summary}
            temperature={d.temperature}
          />
        ))}
      </div>
    </div>
  );
};

export default Hourly;
