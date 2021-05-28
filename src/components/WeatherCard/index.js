import React from 'react';

import { Container } from './styles';

import imgWeather from '../../assets/Shower.png';

function WeatherCard() {
  return (
    <Container>
      <div className="day">Tomorrow</div>

      <img 
        src={imgWeather}
        alt="Weather"
      />

      <div className="temperatures">
        <span className="max">27ºC</span>
        <span className="min">10ºc</span>
      </div>
    </Container>
  );
}

export default WeatherCard;