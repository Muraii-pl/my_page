import styled from "styled-components";

const H1Style = styled.h1`
  color: ${(props) => props.theme.colors.secondText};
  font-size: min(6.4rem, 15vw);
`;

const H2Style = styled.h2`
  color: ${(props) => props.theme.colors.secondText};
  font-size: min(4.8rem, 9 vw);
  font-weight: normal;
`;

export { H2Style, H1Style };
