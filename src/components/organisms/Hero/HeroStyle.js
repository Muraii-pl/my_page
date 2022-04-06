import styled from "styled-components";

const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding: 0 min(1.6rem, 25%);
`;

export default HeroWrapper;
