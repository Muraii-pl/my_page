import React from "react";
import PropTypes from "prop-types";
import NavItemStyld from "./NavItemStyled";

const NavigationItem = ({ name }) => {
  return <NavItemStyld>{name}</NavItemStyld>;
};
NavigationItem.propTypes = {
  name: PropTypes.string,
};
export default NavigationItem;
