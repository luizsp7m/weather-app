import React, { useContext } from 'react';

import { Container } from './styles';

import weatherIcons from '../../utils/weatherIcons';

import { WeatherContext } from '../../context/WeatherContext';

import { format } from 'date-fns';

function WeatherCard({ data }) {
  const { measurement } = useContext(WeatherContext);

  const date = data.applicable_date;

  return (
    <Container>
      <div className="day">{format(new Date(`${date}T00:00:00`), 'E. dd MMM')}</div>

      <img
        src={weatherIcons[data.weather_state_abbr]}
        alt="Weather"
      />

      <div className="temperatures">
        <span className="max">
          {measurement === 'Celsius' ? (
            <>
              {Math.round(data.max_temp)}ºC
            </>
          ) : (
              <>
                {Math.round((data.max_temp * 9/5) + 32)}ºF
            </>
            )}
        </span>

        <span className="min">
          {measurement === 'Celsius' ? (
            <>
              {Math.round(data.min_temp)}ºC
            </>
          ) : (
              <>
                {Math.round((data.min_temp * 9/5) + 32)}ºF
            </>
            )}
        </span>
      </div>
    </Container>
  );
}

export default WeatherCard;