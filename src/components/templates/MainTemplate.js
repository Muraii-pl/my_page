import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import light from "../../styles/themes/light";
import Header from "../organisms/Header/Header";

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default MainTemplate;
