import styled from "styled-components";

const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column wrap;
  padding: 0 min(1.6rem, 25%);

  @media screen and (min-width: 768px) {
    align-items: center;
    padding: 0 10%;
  }
`;

export default HeroWrapper;
