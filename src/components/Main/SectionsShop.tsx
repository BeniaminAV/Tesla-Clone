"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

type SectionsShopProps = {
  title: string;
  description: string;
  CentertBtnText: string | React.ReactNode;
  backgroundImg: string;
};

function SectionsShop({
  title,
  description,
  CentertBtnText,
  backgroundImg,
}: SectionsShopProps) {
  const sectionStyle = {
    backgroundImage: `url("./images/main/${backgroundImg}")`,
  };

  return (
    <main>
      <div
        style={sectionStyle}
        className="w-ful h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center overflow-hidden"
      >
        <Fade>
          <div className="pt-[15vh] text-center">
            <h1 className="text-black text-4xl font-bold">{title}</h1>
            <p className="text-gray-700 text-xl">{description}</p>
          </div>
        </Fade>

        <Fade>
          <div className="mb-[10vh] flex flex-col items-center md:flex-row md:justify-center">
            <span className=" mx-2 w-[264px] h-[40px] bg-black rounded-md text-white  font-bold cursor-pointer mb-2 md:mb-0 md:mx-2">
              {CentertBtnText}
            </span>
          </div>
        </Fade>
      </div>
    </main>
  );
}

export default SectionsShop;
