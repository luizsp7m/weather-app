import React, { Fragment } from 'react';

import Home from './views/Home';

import GlobalStyle from './styles/globalStyle';

import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Home />
      <GlobalStyle />
    </WeatherProvider>
  );
}

export default App;