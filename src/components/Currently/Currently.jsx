import React from 'react';
import Skycons from 'react-skycons';

const Currently = props => {
  const toCelcius = fahr => `${Math.round((fahr - 32) * (5 / 9))} °C`;

  const convertIcon = icon => icon.replace(/-/g, '_').toUpperCase();
  return (
    <div>
      <p>summary: {props.currentWeather.summary}</p>
      <p>temperature: {toCelcius(props.currentWeather.temperature)}</p>
      <Skycons
        color='black'
        icon={convertIcon(props.currentWeather.icon)}
        autoplay={true}
        style={{ width: '200px' }}
      />
    </div>
  );
};

export default Currently;
