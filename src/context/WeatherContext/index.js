import React, { createContext, useEffect, useState } from 'react';

import api from '../../services/api';

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [position, setPosition] = useState([]);
  const [woeid, setWoeid] = useState('455827');
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState();
  const [cities, setCities] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  async function searchCity(value) {
    setLoadingSearch(true);
    await api.get(`/location/search/?query=${value}`).then(response => {
      setCities(response.data);
      setLoadingSearch(false);
    });
  }

  async function loadForecast() {
    setLoading(true);
    await api.get(`/location/${woeid}/`).then(response => {
      setForecast(response.data);
      setLoading(false)
    });
  }

  function geoLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      setPosition(position.coords.latitude, position.coords.longitude);
    }, error => {
      setPosition(undefined);
    });
  }

  async function loadLattLong() {
    console.log(position);
    await api.get(`/location/search/?lattlong=${position[0]},${position[1]}`).then(response => {
      console.log(response.data);
    }).catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    geoLocation();
    loadLattLong();
    loadForecast();
  }, [woeid]);

  return (
    <WeatherContext.Provider value={{ loading, forecast, searchCity, cities, setWoeid, loadingSearch }}>
      { children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider }