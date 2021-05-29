import React, { useContext, useState } from 'react';

import { Container, Row, WeatherImage, WeatherInformation, Toggle } from './styles';

import { BiCurrentLocation } from 'react-icons/bi';

import { WeatherContext } from '../../context/WeatherContext';

import weatherIcons from '../../utils/weatherIcons';

function Sidebar() {
  const [toggle, setToggle] = useState(false);

  const { loading, forecast } = useContext(WeatherContext);

  if(!forecast) {
    return 0;
  }

  return (
    <Container>
      { toggle && (
        <Toggle>
          <button className="search-places" onClick={() => setToggle(!toggle)}>Search for places</button>
        </Toggle>
      )}

      <Row>
        <button className="search-places" onClick={() => setToggle(!toggle)}>Search for places</button>

        <button className="geo-location">
          <BiCurrentLocation size={20} />
        </button>
      </Row>

      <WeatherImage>
        <img
          src={weatherIcons[forecast.consolidated_weather[0].weather_state_abbr]}
          alt='Weather'
          className='img-weather'
        />
      </WeatherImage>

      <WeatherInformation>
        <div className="temperature">
          <span>{Math.round(forecast.consolidated_weather[0].the_temp)}</span> ºc
        </div>

        <div className="weather">{forecast.consolidated_weather[0].weather_state_name}</div>

        <div className="footer">
          <div className="today">Today <span>-</span> Fri. 5 Jun</div>
          <div className="location">{forecast.title}</div>
        </div>
      </WeatherInformation>
    </Container>
  );
}

export default Sidebar;