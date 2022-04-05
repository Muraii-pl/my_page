import React from "react";
// import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default MainTemplate;
