import styled from "styled-components";
import { Link } from "react-scroll";

const NavItemStyld = styled.li`
  font-size: 1.6rem;
  padding: 0 0.5rem;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export { NavItemStyld, NavLink };
