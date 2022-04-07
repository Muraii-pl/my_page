import styled from "styled-components";

const AboutMeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 6.4rem min(1.6rem, 25%);
  display: flex;
  flex-flow: row wrap;

  @media screen and (min-width: 768px) {
    padding: 6.4rem 10%;
  }
`;

export default AboutMeWrapper;
