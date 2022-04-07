import React from "react";
import ImageStyle from "./PhotoStyle";

function Photo() {
  return (
    <ImageStyle
      src="/images/PhotoMy.jpg"
      loading="lazy"
      alt="Zdjęcie profilowe"
    ></ImageStyle>
  );
}

export default Photo;
