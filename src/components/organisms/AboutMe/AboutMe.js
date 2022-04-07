import React from "react";
import Title from "../../atoms/AboutMeTitle/Title";
import AboutMeBody from "../../molecules/AboutMeBody/AboutMeBody";
import AboutMeWrapper from "./AboutMeStyle";

const AboutMe = () => {
  return (
    <AboutMeWrapper className="O_mnie">
      <Title />
      <AboutMeBody />
    </AboutMeWrapper>
  );
};

export default AboutMe;
