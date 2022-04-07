import React from "react";
import Title from "../../atoms/AboutMeTitle/Title";
import Photo from "../../atoms/MyPhoto/Photo";
import AboutMeWrapper from "./AboutMeStyle";

const AboutMe = () => {
  return (
    <AboutMeWrapper className="O_mnie">
      <Title />
      <Photo />
    </AboutMeWrapper>
  );
};

export default AboutMe;
