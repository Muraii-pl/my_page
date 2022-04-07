import styled from "styled-components";
import Typical from "react-typical";
const H1Style = styled.h1`
  color: ${(props) => props.theme.colors.secondText};
  font-size: max(6.4rem, 5vw);
  text-align: left;
  width: 100%;
`;

const H2Style = styled.h2`
  color: ${(props) => props.theme.colors.secondText};
  font-size: max(3.2rem, 3vw);
  font-weight: normal;
  text-align: left;
  width: 100%;
`;

const TypicalStyle = styled(Typical)`
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  padding: 0 1ch;
`;

export { H2Style, H1Style, TypicalStyle };
