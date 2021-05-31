import React from 'react';

import { Container } from './styles';

import weatherIcons from '../../utils/weatherIcons';

import { format } from 'date-fns';

function WeatherCard({ data }) {  
  const date = data.applicable_date;

  return (
    <Container>
      <div className="day">{ format(new Date(`${date}T00:00:00`), 'E. dd MMM') }</div>

      <img 
        src={weatherIcons[data.weather_state_abbr]}
        alt="Weather"
      />

      <div className="temperatures">
        <span className="max">{Math.round(data.max_temp)}ºc</span>
        <span className="min">{Math.round(data.min_temp)}ºc</span>
      </div>
    </Container>
  );
}

export default WeatherCard;