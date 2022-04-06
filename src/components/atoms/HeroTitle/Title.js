import React from "react";
import Typical from "react-typical";
import { H1Style, H2Style } from "./TitleStyle";
function Title() {
  return (
    <>
      <H2Style>Cześć, nazywam się </H2Style>
      <H1Style>Mateusz Głowania</H1Style>
      <H2Style>jestem frontend developerem</H2Style>
    </>
  );
}

export default Title;
