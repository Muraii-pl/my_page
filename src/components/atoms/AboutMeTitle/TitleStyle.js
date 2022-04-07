import styled from "styled-components";

const TitleAboutMe = styled.h1`
  font-size: min(7.2rem, 15vw);
  width: 100%;
  text-align: center;
  border-bottom: 1rem solid ${(props) => props.theme.colors.primary};
  margin-bottom: 1.6rem;
`;

export default TitleAboutMe;
