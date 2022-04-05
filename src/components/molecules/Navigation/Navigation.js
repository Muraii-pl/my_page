import React from "react";
import NavigationItem from "../../atoms/Navigation/NavigationItem";
import { NavListStyled, NavStyled } from "./NavigationStyle";

const Navigation = () => {
  const navItem = ["O mnie", "Projekty", "Technologie"];

  return (
    <NavStyled>
      <NavListStyled>
        {navItem.map((element) => {
          return <NavigationItem name={element} key={element} />;
        })}
      </NavListStyled>
    </NavStyled>
  );
};

export default Navigation;
