import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondText};
  padding: 2rem 0;
`;

export default HeaderStyled;
