import React, { Fragment, useContext } from 'react';

import Sidebar from '../../components/Sidebar';
import WeatherCard from '../../components/WeatherCard';

import { Container, Content, Wrapper, Select, Forecast, Today, Status, StatusCard } from './styles';

import { WeatherContext } from '../../context/WeatherContext';

function Home() {
  const { loading, forecast } = useContext(WeatherContext);

  return (
    <Container>
      { !forecast ? (<h1>Carregando</h1>) : (
        <Fragment>
          <Sidebar />
          <Content>
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
                      <span>{Math.round(forecast.consolidated_weather[0].wind_speed)}</span> mph
                </div>

                    <div className="wind">
                      <div className="direction"></div>
                      <span>wsw</span>
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
          </Content>
        </Fragment>
      )}
    </Container>
  );
}

export default Home;