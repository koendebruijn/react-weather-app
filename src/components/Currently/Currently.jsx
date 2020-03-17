import React from 'react';
import Skycons from 'react-skycons';
import Temprature from '../Temprature/Temprature';

const Currently = props => {
  const convertIcon = icon => icon.replace(/-/g, '_').toUpperCase();

  console.log(typeof props.currentWeather.temperature);
  return (
    <div>
      <p>summary: {props.currentWeather.summary}</p>
      <Skycons
        color='black'
        icon={convertIcon(props.currentWeather.icon)}
        autoplay={true}
        style={{ width: '200px' }}
      />

      <Temprature temprature={props.currentWeather.temperature} />
    </div>
  );
};

export default Currently;
