import React from 'react';
import Skycon from 'react-skycons';

import Temperature from '../../Temperature/Temperature';
import classes from './Currently.module.scss';

const Currently = props => {
  const convertIcon = require('../../../Utils').convertIcon;
  return (
    <div className={classes.Currently}>
      <div className={classes.box}>
        <p>{props.forecast.summary}</p>
        <Temperature
          temperature={props.forecast.temperature}
          isClickable={true}
          class={classes.temperature}
        />
      </div>

      <Skycon
        color='white'
        icon={convertIcon(props.forecast.icon)}
        autoplay={true}
        style={{ width: '250' }}
      />
    </div>
  );
};

export default Currently;
