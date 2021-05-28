import React, { useState } from 'react';

import { Container, Row, WeatherImage, WeatherInformation, Toggle } from './styles';

import { BiCurrentLocation } from 'react-icons/bi';

import imgWeather from '../../assets/Shower.png';
import imgBackground from '../../assets/Cloud-background.png';

function Sidebar() {
  const [toggle, setToggle] = useState(false);

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
          src={imgWeather}
          alt='Weather'
          className='img-weather'
        />

        <img
          src={imgBackground}
          alt='Background'
          className="img-background"
        />
      </WeatherImage>

      <WeatherInformation>
        <div className="temperature">
          <span>15</span> ºc
        </div>

        <div className="weather">Shower</div>

        <div className="footer">
          <div className="today">Today <span>-</span> Fri. 5 Jun</div>
          <div className="location">Helsinki</div>
        </div>
      </WeatherInformation>
    </Container>
  );
}

export default Sidebar;