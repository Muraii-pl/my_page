import React from "react";
import { H1Style, H2Style, TypicalStyle } from "./TitleStyle";
function Title() {
  return (
    <>
      <H2Style>Cześć, nazywam się </H2Style>
      <H1Style>Mateusz Głowania</H1Style>
      <H2Style>
        <span style={{ width: "100%" }}>jestem</span>
        <TypicalStyle
          steps={["Frontend", 2000, "", 100]}
          loop={Infinity}
          wrapper="span"
        />
        <div>Developerem</div>
      </H2Style>
    </>
  );
}

export default Title;
