"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CustomProps = {
  title: string;
  btnCenter: string;
  bonus: string;
  subPrice: string;
  delivery: string;
  speed: string;
  range: string;
  seconds: string;
  price: string;
  subSpeed: string;
  subSeconds: string;
  subRange: string;
  bgImageOne: string;
  bgImageTwo: string;
  bgImageThree: string;
};

function Custom({
  title,
  btnCenter,
  bonus,
  subPrice,
  delivery,
  speed,
  subSpeed,
  range,
  subRange,
  seconds,
  subSeconds,
  price,
  bgImageOne,
  bgImageTwo,
  bgImageThree,
}: CustomProps) {
  const sectionStyleOne = {
    backgroundImage: `url("/Custom/${bgImageOne}")`,
  };
  const sectionStyleTwo = {
    backgroundImage: `url("/Custom/${bgImageTwo}")`,
  };
  const sectionStyleThree = {
    backgroundImage: `url("/Custom/${bgImageThree}")`,
  };

  return (
    <>
      <main className="w-full h-auto lg:flex items-center justify-center">
        <div className="lg:w-4/5 w-5/5 mt-[10vh] overflow-hidden bg-[#f4f4f4]">
          <Fade delay={500}>
            <Carousel
              autoPlay={true}
              interval={3000}
              swipeable={true}
              showThumbs={false}
              emulateTouch={true}
              infiniteLoop={true}
            >
              <div className="">
                <div style={sectionStyleOne} className="slider-photo-model" />
              </div>
              <div className="">
                <div style={sectionStyleTwo} className="slider-photo-model" />
              </div>
              <div className="">
                <div style={sectionStyleThree} className="slider-photo-model" />
              </div>
            </Carousel>

            <div className="flex items-center h-[50px] justify-center bg-[#f4f4f4] p-2">
              <p className="mx-2 md:text-sm text-xs text-gray-700">{price}</p>
              <p className="mx-2 md:text-sm text-xs text-gray-700">
                {subPrice}
              </p>
            </div>
          </Fade>
        </div>

        <div className="max-w-full md:mx-4 max-h-full">
          <Fade delay={350}>
            <div className="sm:w-[355px] w-full sm:mx-auto py-5 bg-black/90 md:rounded-md md:my-4 text-center mb-4">
              <p className="p-5 text-gray-300">{bonus}</p>
            </div>

            <h2 className="text-center text-3xl font-bold text-black">
              {title}
            </h2>
            <p className="text-center text-sm text-black">{delivery}</p>

            <div className="flex items-center justify-center py-5 text-center">
              <span className="w-[100px]">
                <p className="model-title">{range}</p>
                <p className="model-desc">{subRange}</p>
              </span>
              <span className="w-[100px]">
                <p className="model-title">{speed}</p>
                <p className="model-desc">{subSpeed}</p>
              </span>
              <span className="w-[100px]">
                <p className="model-title">{seconds}</p>
                <p className="model-desc">{subSeconds}</p>
              </span>
            </div>

            <div className="flex items-center justify-center">
              <button className="lg:w-[100%] w-[40%] bg-[#3E6AE1] hover:bg-[#1e42a7] rounded-md">
                <p className="text-white sm:text-sm text-xs p-3 font-semibold">
                  {btnCenter}
                </p>
              </button>
            </div>
          </Fade>

          <div className="lg:hidden">
            <div className="border-b border-2  border-[#f4f4f4] my-4"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Custom;
