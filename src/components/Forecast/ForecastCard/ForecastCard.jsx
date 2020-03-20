import React from 'react';
import Skycon from 'react-skycons';
import classes from './ForecastCard.module.scss';
import Temperature from '../../Temperature/Temperature';

const ForecastCard = props => {
  const convertIcon = require('../../../Utils').convertIcon;

  return (
    <div className={classes.ForecastCard}>
      <p className={classes.dateTime}>{props.dateTime}</p>
      <div className={classes.header}>
        <div className={classes.col}>
          <p>{props.summary}</p>
          <Temperature temperature={props.temperature} isClickable={false} />
        </div>
        <Skycon
          color='white'
          icon={convertIcon(props.icon)}
          autoplay={true}
          style={{ width: '200px', marginTop: '20px' }}
        />
      </div>
    </div>
  );
};

export default ForecastCard;
