import React from "react";
import AboutMe from "../components/organisms/AboutMe/AboutMe";
import Hero from "../components/organisms/Hero/Hero";
import MainTemplate from "../components/templates/MainTemplate";

const MainPage = () => {
  return (
    <MainTemplate>
      <>
        <Hero />
        <AboutMe />
      </>
    </MainTemplate>
  );
};

export default MainPage;
