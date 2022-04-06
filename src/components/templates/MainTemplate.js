import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import GlobalStyle from "../../styles/GlobalStyle";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import Header from "../organisms/Header/Header";

const MainTemplate = ({ children }) => {
  const [themes, setThemes] = useState(light);
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setThemes(light);
    } else if (localStorage.getItem("theme") === "dark") {
      setThemes(dark);
      setDarkTheme(true);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <Header />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default MainTemplate;
