import React from "react";
import Toggle from "../../atoms/ToggleTheme/Toggle";
import Navigation from "../../molecules/Navigation/Navigation";

import HeaderStyled from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderStyled>
      <Navigation />
      <Toggle />
    </HeaderStyled>
  );
};

export default Header;
