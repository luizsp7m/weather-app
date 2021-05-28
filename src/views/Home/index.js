import React from 'react';

import Sidebar from '../../components/Sidebar';
import WeatherCard from '../../components/WeatherCard';
import StatusCard from '../../components/StatusCard';

import { Container, Content, Wrapper, Select, Forecast, Today, Status } from './styles';

function Home() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Wrapper>
          <Select>
            <button className="selected">ºC</button>
            <button>ºF</button>
          </Select>

          <Forecast>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
          </Forecast>

          <Today>
            <div className="title">Today’s Hightlights </div>

            <Status>
              <StatusCard />
              <StatusCard />
              <StatusCard />
              <StatusCard />
            </Status>
          </Today>
        </Wrapper>
      </Content>
    </Container>
  );
}

export default Home;