import React, { createContext, useEffect, useState } from 'react';

import api from '../../services/api';

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [position, setPosition] = useState([]);
  const [location, setLocation] = useState('455827');
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState();

  async function loadForecast() {
    setLoading(true);
    await api.get(`/location/${location}/`).then(response => {
      setForecast(response.data);
      setLoading(false)
    });
  }

  useEffect(() => {
    loadForecast();

    navigator.geolocation.getCurrentPosition(position => {
      setPosition(position.coords.latitude, position.coords.longitude);
    }, error => {
      console.log('Não permitiu');
    });

  }, [location]);

  return (
    <WeatherContext.Provider value={{ loading, forecast }}>
      { children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider }