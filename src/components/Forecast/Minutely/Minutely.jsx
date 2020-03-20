import React from 'react';
import Skycon from 'react-skycons';
import classes from './Minutely.module.scss';

const Minutely = props => {
  const convertIcon = require('../../../Utils').convertIcon;

  console.log(props.forecast);

  return (
    <div className={classes.Minutely}>
      <div className={classes.header}>
        <p>{props.forecast.summary}</p>
        <Skycon
          color='white'
          icon={convertIcon(props.forecast.icon)}
          autoplay={true}
          style={{ width: '250wsw3wswpx' }}
        />
      </div>
    </div>
  );
};

export default Minutely;
