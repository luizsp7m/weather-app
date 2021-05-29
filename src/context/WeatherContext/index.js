import React, { createContext, useEffect, useState } from 'react';

import api from '../../services/api';

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [location, setLocation] = useState('455827');
  const [loading, setLoading] = useState(false);
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
  }, [location]);

  return (
    <WeatherContext.Provider value={{ loading, forecast }}>
      { children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider }