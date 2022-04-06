import * as React from "react";
import HeroWrapper from "./HeroStyle";
import Title from "../../atoms/HeroTitle/Title";

const Hero = () => {
  return (
    <HeroWrapper className="Hero">
      <Title />
    </HeroWrapper>
  );
};

export default Hero;
