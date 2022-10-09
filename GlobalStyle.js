import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: arial;
    margin: 0;
    height: 100%;
    background-color: #fdd98a;
  }

  .MuiMenu-paper {
    background-color: #1b1a1c;
  }

`;

export default GlobalStyle;
