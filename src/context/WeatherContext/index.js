import React, { createContext, useEffect, useState } from 'react';

import api from '../../services/api';

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [woeid, setWoeid] = useState();
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState();
  const [cities, setCities] = useState(null);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [measurement, setMeasurement] = useState('Celsius');

  async function searchCity(value) {
    setLoadingSearch(true);
    await api.get(`/location/search/?query=${value}`).then(response => {
      setCities(response.data);
      setLoadingSearch(false);
    });
  }

  function currentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async position => {
        await api.get(`/location/search/?lattlong=${position.coords.latitude}, ${position.coords.longitude}`)
          .then(response => {
            setWoeid(response.data[0].woeid);
          });
      }, error => {
        setWoeid(2487956);
      });
    } else {
      alert("I'm sorry, but geolocation services are not supported by your browser.");
    }
  }

  async function loadForecast() {
    setLoading(true);
    await api.get(`/location/${woeid}/`).then(response => {
      setForecast(response.data);
      setLoading(false)
    });
  }

  useEffect(() => {
    currentPosition();
  }, []);

  useEffect(() => {
    if (woeid) loadForecast();
  }, [woeid]);

  return (
    <WeatherContext.Provider value={{
      loading,
      forecast,
      searchCity,
      cities,
      setWoeid,
      loadingSearch,
      currentPosition,
      measurement,
      setMeasurement
    }}>
      { children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider }