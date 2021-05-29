import React from 'react';

import { Container } from './styles';

import weatherIcons from '../../utils/weatherIcons';

function WeatherCard({ data }) {  
  return (
    <Container>
      <div className="day">{ data.applicable_date }</div>

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