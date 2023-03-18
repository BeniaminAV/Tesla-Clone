"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  ApparealOne,
  ApparealOneMobile,
  ApparealThree,
  ApparealThreeMobile,
  ApparealTwo,
  ApparealTwoMobile,
} from "../../../public";

function SectionShopAppareal() {
  const [imageSrcOne, setImageOneSrc] = useState(ApparealOne);
  const [imageSrcTwo, setImageTwoSrc] = useState(ApparealTwo);
  const [imageSrcThree, setImageThreeSrc] = useState(ApparealThree);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setImageOneSrc(ApparealOneMobile);
        setImageTwoSrc(ApparealTwoMobile);
        setImageThreeSrc(ApparealThreeMobile);
      } else {
        setImageOneSrc(ApparealOne);
        setImageTwoSrc(ApparealTwo);
        setImageThreeSrc(ApparealThree);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-[100%] mx-auto grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3">
      <div className="relative w-full h-screen pr-2">
        <Image
          src={imageSrcOne}
          alt="appareal"
          className="w-full h-screen  bg-no-repeat bg-center overflow-hidden bg-contain"
        />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center pb-[10vh]">
          <h2 className="text-4xl font-bold text-black">Men's Appareal</h2>
          <button className=" w-[40%] h-[60px] border-4 border-black hover:bg-black hover:text-white ease-in duration-150 font-semibold text-gray-700 rounded-md mt-5">
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative w-full h-screen pr-2">
        <Image
          src={imageSrcTwo}
          alt="appareal"
          className="w-full h-screen  bg-no-repeat bg-center overflow-hidden bg-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center pb-[10vh]">
          <h2 className="text-4xl font-bold text-black">Women's Apparel</h2>
          <button className=" w-[40%] h-[60px] border-4 border-black hover:bg-black hover:text-white ease-in duration-150 font-semibold text-gray-700 rounded-md mt-5">
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative w-full h-screen pr-2">
        <Image
          src={imageSrcThree}
          alt="appareal"
          className="w-full h-screen  bg-no-repeat bg-center overflow-hidden bg-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center pb-[10vh]">
          <h2 className="text-4xl font-bold text-black">Kids’ Apparel</h2>
          <button className=" w-[40%] h-[60px] border-4 border-black hover:bg-black hover:text-white ease-in duration-150 font-semibold text-gray-700 rounded-md mt-5">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionShopAppareal;
