import React, { useEffect, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { MdLightbulbOutline, MdNightlightRound } from "react-icons/md";
import ToggleWrapper from "./ToggleStyled";
const Toggle = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
    if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ToggleWrapper>
      {darkTheme ? (
        <MdLightbulbOutline onClick={toggleTheme} size="22" />
      ) : (
        <MdNightlightRound height="100%" onClick={toggleTheme} size="22" />
      )}
    </ToggleWrapper>
  );
};
export default Toggle;
