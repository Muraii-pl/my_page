import React from "react";
import Text from "../../atoms/AboutMeText/Text";
import Photo from "../../atoms/MyPhoto/Photo";
import AboutMeBodyStyled from "./AboutMeBodyStyle";

const AboutMeBody = () => {
  return (
    <AboutMeBodyStyled>
      <Photo />
      <Text />
    </AboutMeBodyStyled>
  );
};

export default AboutMeBody;
