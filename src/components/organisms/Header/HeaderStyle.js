import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondText};
  position: fixed;
  height: 6.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 1;
`;

export default HeaderStyled;
