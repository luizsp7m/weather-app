import React, { Fragment, useContext } from 'react';

import Sidebar from '../../components/Sidebar';
import WeatherCard from '../../components/WeatherCard';

import { Container, Content, Wrapper, Select, Forecast, Today, Status, StatusCard } from './styles';

import { WeatherContext } from '../../context/WeatherContext';

import { IoMdArrowRoundUp } from 'react-icons/io'

import { Puff } from 'react-loading-icons';

function Home() {
  const { loading, forecast } = useContext(WeatherContext);

  return (
    <Container>
      <Sidebar />
      <Content>
        {loading ? <Puff style={{ margin: '0 auto' }} /> : (
          <Wrapper>
            <Select>
              <button className="selected">ºC</button>
              <button>ºF</button>
            </Select>

            <Forecast>
              <WeatherCard data={forecast.consolidated_weather[1]} />
              <WeatherCard data={forecast.consolidated_weather[2]} />
              <WeatherCard data={forecast.consolidated_weather[3]} />
              <WeatherCard data={forecast.consolidated_weather[4]} />
              <WeatherCard data={forecast.consolidated_weather[5]} />
            </Forecast>

            <Today>
              <div className="title">Today’s Hightlights </div>

              <Status>
                <StatusCard>
                  <div className="title">Wind status</div>

                  <div className="status">
                    <span>
                      {Math.round(forecast.consolidated_weather[0].wind_speed)}
                    </span> mph
                    </div>

                  <div className="wind">
                    <div className="direction">
                      <IoMdArrowRoundUp
                        size={16}
                        className={'arrowIcon'}
                        style={{
                          transform: `rotate(${Math.round(Math.round(forecast.consolidated_weather[0].wind_direction))
                            }deg)`
                        }}
                      />
                    </div>

                    <span>
                      {forecast.consolidated_weather[0].wind_direction_compass}
                    </span>
                  </div>
                </StatusCard>

                <StatusCard>
                  <div className="title">Humidity</div>

                  <div className="status">
                    <span>{Math.round(forecast.consolidated_weather[0].humidity)}</span> %
                </div>

                  <div className="bar-container">
                    <div className="percentages">
                      <span>0</span>
                      <span>50</span>
                      <span>100</span>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${Math.round(forecast.consolidated_weather[0].humidity)}%` }}
                      />
                    </div>

                    <div className="percentage">%</div>
                  </div>
                </StatusCard>

                <StatusCard>
                  <div className="title">Visibility</div>

                  <div className="status">
                    <span>{Math.round(forecast.consolidated_weather[0].visibility)}</span> miles
                </div>
                </StatusCard>

                <StatusCard>
                  <div className="title">Air pressure</div>

                  <div className="status">
                    <span>{Math.round(forecast.consolidated_weather[0].air_pressure)}</span> mb
                </div>
                </StatusCard>
              </Status>
            </Today>
          </Wrapper>
        )}
      </Content>
    </Container>
  );
}

export default Home;