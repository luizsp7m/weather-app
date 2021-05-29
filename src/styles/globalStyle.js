import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #100E1D;
    --primary-color: #1E213A;
    --text-primary: #fafafa;
    --text-secondary: #A09FB1;
    --button-color: #6E707A;
    --progress-color: #FFEC65;
  }

  html {
    font-size: 62.5%;
  }

  body, button, button {
    font-family: 'Raleway', sans-serif;
  }

  button, input {
    outline: none;
    border: none;
    background: none;
  }

  body {
    background: var(--background);
  }

`

export default GlobalStyle;