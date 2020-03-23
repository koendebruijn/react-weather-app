import React, { useState, useEffect } from 'react';
import './App.scss';
import SearchContainer from './components/SearchContainer/SearchContainer';
import Axios from 'axios';
import Forecast from './components/Forecast/Forecast';
import Minutely from './components/Forecast/Minutely/Minutely';

const App = () => {
  const [geoLoaction, setGeoLocation] = useState({ lat: null, lng: null });
  const [forecast, setForecast] = useState(null);

  const baseUrl = 'https://api.darksky.net/forecast/';
  const apiKey = '80e270a12de88dadd1b2b981d95ef3f3/';

  useEffect(() => {
    if (geoLoaction.lat && geoLoaction.lng) {
      Axios.get(`${baseUrl}${apiKey}${geoLoaction.lat},${geoLoaction.lng}`)
        .then(response => {
          setForecast(response.data);
          console.log(response.data);
        })
        .catch(error => console.log(error));
    }
  }, [geoLoaction]);

  const handleGeoLocation = geoLoc => {
    if (geoLoc.lat && geoLoc.lng) {
      setGeoLocation({ lat: geoLoc.lat, lng: geoLoc.lng });
    }
  };

  return (
    <div className='App'>
      <SearchContainer handleGeoLocation={handleGeoLocation} />
      {forecast ? <Forecast forecast={forecast} /> : null}
      {/* {forecast ? <Minutely forecast={forecast.hourly} /> : null} */}
    </div>
  );
};

export default App;
