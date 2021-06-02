import React, { Fragment, useContext, useState } from 'react';

import { Container, Row, WeatherImage, WeatherInformation, Toggle } from './styles';

import { BiCurrentLocation } from 'react-icons/bi';

import { WeatherContext } from '../../context/WeatherContext';

import weatherIcons from '../../utils/weatherIcons';

import { format } from 'date-fns';

import { Puff } from 'react-loading-icons';

import { AiOutlineSearch } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri'

function Sidebar() {
  const [toggle, setToggle] = useState(false);

  const { loading, forecast, searchCity, cities, setWoeid, loadingSearch } = useContext(WeatherContext);

  const [search, setSearch] = useState();

  return (
    <Container>
      <Fragment>
        {toggle && (
          <Toggle>
            <div className="close-sidebar">
              <RiCloseLine
                size={28}
                color={'fafafa'}
                onClick={() => setToggle(!toggle)}
              />
            </div>

            <div className="search">
              <div className="input-group">
                <AiOutlineSearch size={22} color={'6E707A'} />
                <input
                  type="text"
                  placeholder="Search location"
                  onChange={e => setSearch(e.target.value)}
                />
              </div>

              <button onClick={() => searchCity(search)}>Search</button>
            </div>

            <div className="cities">
              {cities.length === 0 ? <h3>No results found</h3> : cities.map(city => (
                <div
                  className="city"
                  key={city.woeid}
                  onClick={() => setWoeid(city.woeid)}
                >
                  {city.title}
                </div>
              ))}
            </div>
          </Toggle>
        )}

        <Row>
          <button className="search-places" onClick={() => setToggle(!toggle)}>Search for places</button>

          <button className="geo-location">
            <BiCurrentLocation size={24} />
          </button>
        </Row>

        {loading ? <Puff style={{ margin: '0 auto' }} /> : (
          <>
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

              <div className="weather">
                {forecast.consolidated_weather[0].weather_state_name}
              </div>

              <div className="footer">
                <div className="today">Today <span>•</span> {format(new Date(`${forecast.time}`), 'E. dd MMM')}</div>
                <div className="location">{forecast.title}</div>
              </div>
            </WeatherInformation>
          </>
        )}
      </Fragment>
    </Container>
  );
}

export default Sidebar;