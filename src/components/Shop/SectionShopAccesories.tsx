"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

type SectionsShopAccesoriesProps = {
  title: string;
  BtnCenter: string;
  backgroundImage: string;
};

function SectionsShopAccesories({
  title,
  BtnCenter,
  backgroundImage,
}: SectionsShopAccesoriesProps) {
  const sectionStyle = {
    backgroundImage: `url("./images/shop/${backgroundImage}")`,
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={sectionStyle}
    >
      <div className="pt-[60vh] w-full text-center">
        <Fade delay={250}>
          <h2 className="sm:text-6xl text-4xl font-bold text-white">{title}</h2>
          <button className="sm:w-[70%] md:w-[30%] w-[90%] h-[60px] bg-white font-semibold text-gray-700 rounded-md mt-10">
            {BtnCenter}
          </button>
        </Fade>
      </div>
    </div>
  );
}

export default SectionsShopAccesories;
