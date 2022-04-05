import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    border: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
      font-size:62.5%;
  }
  body {
      font-size:1.6rem;
      color:red;
      font-family:"Ubuntu", sans-serif;
      line-height:1.6 ;
  }
`;

export default GlobalStyle;
