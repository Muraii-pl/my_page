import React from "react";
import PropTypes from "prop-types";
import { NavItemStyld, NavLink } from "./NavItemStyled";

const NavigationItem = ({ name }) => {
  return (
    <NavItemStyld>
      <NavLink
        to={`${name.replace(/\s+/g, "_")}`}
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
      >
        {name}
      </NavLink>
    </NavItemStyld>
  );
};
NavigationItem.propTypes = {
  name: PropTypes.string,
};
export default NavigationItem;
