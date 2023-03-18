"use client";

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  CarouselOne,
  CarouselTwo,
  CarouselThree,
  CarouselOneMobile,
  CarouselTwoMobile,
  CarouselThreeMobile,
} from "../../../public";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ShopCarousel() {
  return (
    <div className="w-full">
      <Carousel
        autoPlay={true}
        interval={3000}
        swipeable={true}
        showThumbs={false}
        emulateTouch={true}
        infiniteLoop={true}
        className="carousel hidden sm:flex"
      >
        <div style={{ position: "relative" }}>
          <Image src={CarouselOne} alt="bg-1" className="carousel-shop" />
          <div
            className="absolute mb-[10vh]  text-white w-full text-center"
            style={{ bottom: "60px" }}
          >
            <h2 className="sm:text-3xl md:text-5xl lg:text-6xl  font-semibold my-2">
              Model Y All-Weather Interior Liners
            </h2>
            <p className="sm:text-xl md:text-3xl lg:text-4xl text-sm font-semibold mb-6 py-2">
              For maxium protection and durability
            </p>
            <div className="my-2">
              <button className="w-[450px] h-[60px] bg-white text-black/60 text-md rounded-md font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Image src={CarouselTwo} alt="bg-2" className="carousel-shop" />
          <div
            className="absolute mb-[10vh]   text-white w-full text-center"
            style={{ bottom: "60px" }}
          >
            <h2 className="sm:text-3xl md:text-5xl lg:text-6xl font-semibold my-2">
              Chill Collection
            </h2>
            <p className="sm:text-xl md:text-3xl lg:text-4xl text-sm font-semibold mb-6 py-2">
              Premium comfort for any season
            </p>
            <div className="my-2">
              <button className="w-[450px] h-[60px] bg-white text-black/60 text-md rounded-md font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Image src={CarouselThree} alt="bg-3" className="carousel-shop" />
          <div
            className="absolute mb-[10vh]   text-white w-full text-center"
            style={{ bottom: "60px" }}
          >
            <h2 className="sm:text-3xl md:text-5xl lg:text-6xl font-semibold my-2">
              Wall Connector
            </h2>
            <p className="sm:text-xl md:text-3xl lg:text-4xl text-sm font-semibold mb-6 py-2">
              The most convenient way to charge at home
            </p>
            <div className="my-2">
              <button className="w-[450px] h-[60px] bg-white text-black/60 text-md rounded-md font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Mobile screen */}
      <Carousel
        autoPlay={true}
        interval={3000}
        swipeable={true}
        showThumbs={false}
        emulateTouch={true}
        infiniteLoop={true}
        className="carousel sm:hidden"
      >
        <div style={{ position: "relative" }}>
          <Image src={CarouselOneMobile} alt="bg-1" className="carousel-shop" />
          <div
            className="absolute bot-0  text-white w-full text-center"
            style={{ bottom: "60px" }}
          >
            <h2 className="sm:text-4xl text-2xl font-semibold my-2">
              Model Y All-Weather Interior Liners
            </h2>
            <p className="sm:text-xl text-sm font-semibold mb-6 py-2">
              For maxium protection and durability
            </p>
            <div className="my-2">
              <button className="w-[280px] h-[40px] bg-white text-black/60 text-md rounded-md font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Image src={CarouselTwoMobile} alt="bg-2" className="carousel-shop" />
          <div
            className="absolute bot-0  text-white w-full text-center"
            style={{ bottom: "60px" }}
          >
            <h2 className="sm:text-4xl text-2xl font-semibold my-2">
              Chill Collection
            </h2>
            <p className="sm:text-xl text-sm font-semibold mb-6 py-2">
              Premium comfort for any season
            </p>
            <div className="my-2">
              <button className="w-[280px] h-[40px] bg-white text-black/60 text-md rounded-md font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Image
            src={CarouselThreeMobile}
            alt="bg-3"
            className="carousel-shop"
          />
          <div
            className="absolute bot-0  text-white w-full text-center"
            style={{ bottom: "60px" }}
          >
            <h2 className="sm:text-4xl text-2xl font-semibold my-2">
              Wall Connector
            </h2>
            <p className="sm:text-xl text-sm font-semibold mb-6 py-2">
              The most convenient way to charge at home
            </p>
            <div className="my-2">
              <button className="w-[280px] h-[40px] bg-white text-black/60 text-md rounded-md font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default ShopCarousel;
