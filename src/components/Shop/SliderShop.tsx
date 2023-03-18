"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BannerOne,
  BannerTwo,
  BannerThree,
  BannerFour,
  BannerFive,
  BannerSix,
  BannerSeven,
  BannerEight,
} from "../../../public";
import Slider from "react-slick";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function SliderShop() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Fade delay={250}>
        <div className="overflow-hidden max-w-full h-[90vh] mx-6">
          <h2 className="mt-10 mb-5 text-black text-3xl font-bold p-2">
            Best Sellers
          </h2>
          <Slider {...settings}>
            <div>
              <Image src={BannerOne} alt="bg-1" className="slider-photo" />
              <p className="slider-text">Model 3/Y Key Fob</p>
            </div>
            <div>
              <Image src={BannerTwo} alt="bg-2" className="slider-photo" />
              <p className="slider-text">
                Model Y All-Weather Rear Cargo Liner Set
              </p>
            </div>
            <div>
              <Image src={BannerThree} alt="bg-3" className="slider-photo" />
              <p className="slider-text">Model 3/Y Air Filter</p>
            </div>
            <div>
              <Image src={BannerFour} alt="bg-1" className="slider-photo" />
              <p className="slider-text">Model S/3/Y Pet Liner</p>
            </div>
            <div>
              <Image src={BannerFive} alt="bg-2" className="slider-photo" />
              <p className="slider-text">Model Y All-Weather Interior Liners</p>
            </div>
            <div>
              <Image src={BannerSix} alt="bg-3" className="slider-photo" />
              <p className="slider-text">Model 3/Y Center Console Trays</p>
            </div>
            <div>
              <Image src={BannerSeven} alt="bg-3" className="slider-photo" />
              <p className="slider-text">Model 3/Y Automatic Garage Opener</p>
            </div>
            <div>
              <Image src={BannerEight} alt="bg-3" className="slider-photo" />
              <p className="slider-text">Wall Connector</p>
            </div>
          </Slider>
        </div>
      </Fade>
    </>
  );
}

export default SliderShop;
