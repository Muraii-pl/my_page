import styled from "styled-components";

const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 6.4rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: clamp(16px, 3.2rem, 10%);
`;

export default HeroWrapper;
