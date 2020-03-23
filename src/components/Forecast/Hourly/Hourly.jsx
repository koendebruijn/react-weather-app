import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard';
import Skycon from 'react-skycons';
import classes from './Hourly.module.scss';

const Hourly = props => {
  const convertUnixTimestamp = require('../../../Utils').unixTimeConverter;
  const convertIcon = require('../../../Utils').convertIcon;
  return (
    <div className={classes.Hourly}>
      <div className={classes.header}>
        <p>{props.forecast.summary}</p>
      </div>
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
