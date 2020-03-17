import React from 'react';
import Skycons from 'react-skycons';
import Temperature from '../Temperature/Temperature';
import classes from './Currently.module.scss';

const Currently = props => {
  const convertIcon = icon => icon.replace(/-/g, '_').toUpperCase();

  return (
    <div className={classes.Currently}>
      <div className={classes.box}>
        <p>{props.currentWeather.summary}</p>
        <Temperature
          temperature={props.currentWeather.temperature}
          class={classes.temperature}
        />
      </div>

      <Skycons
        color='white'
        icon={convertIcon(props.currentWeather.icon)}
        autoplay={true}
        style={{ width: '250wsw3wswpx' }}
      />
    </div>
  );
};

export default Currently;
