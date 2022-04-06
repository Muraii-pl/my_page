import styled from "styled-components";

const H1Style = styled.h1`
  color: ${(props) => props.theme.colors.secondText};
  font-size: min(6.4rem, 42px);
`;

const H2Style = styled.h2`
  color: ${(props) => props.theme.colors.secondText};
  font-size: 3.6rem;
`;

export { H2Style, H1Style };
