import React from "react";
import Navigation from "../../molecules/Navigation/Navigation";

import HeaderStyled from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderStyled>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
