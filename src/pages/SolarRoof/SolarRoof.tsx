"use client";

import Head from "next/head";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { SunIcon } from "@heroicons/react/24/outline";
import NavbarWhite from "@/components/Navbar/NavbarWhite";
import { useRouter } from "next/router";

function SolarRoof() {
  const sectionStyle = {
    backgroundImage: `url("/Article/SolarRoof.jpg")`,
  };
  const router = useRouter();

  return (
    <>
      <div>
        <Head>
          <title>Solar Roof | Tesla</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/icon.png" />
        </Head>
        <main
          style={sectionStyle}
          className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 left-0">
            <NavbarWhite />
          </div>

          <div className="pt-[15vh] text-center">
            <h1 className="text-white text-4xl font-bold">Solar Roof</h1>
          </div>

          <div className="mb-[10vh] lg:flex items-center justify-center">
            <div className="flex text-white items-center justify-center w-full my-5">
              <Fade delay={100}>
                <div className="detail-show">
                  <span className="flex items-center justify-center">
                    <SunIcon className="md:w-8 md:h-8 w-6 h-6" />
                  </span>
                  <p className="md:text-sm text-[10px] font-bold">
                    Beautiful Solar
                  </p>
                </div>
              </Fade>

              <Fade delay={200}>
                <div className="detail-show">
                  <h2 className="md:text-2xl text-md font-bold">25-Year</h2>
                  <p className="md:text-sm text-[10px] font-bold">
                    Tile Warranty
                  </p>
                </div>
              </Fade>

              <Fade delay={300}>
                <div className="detail-show">
                  <h2 className="md:text-2xl text-md font-bold">24/7</h2>
                  <p className="md:text-sm text-[10px] font-bold">
                    Outage Protection
                  </p>
                </div>
              </Fade>
            </div>

            <Fade delay={500}>
              <div
                onClick={() => router.push("/SolarPanels/OrderSolarPanel")}
                className="flex flex-col items-center md:flex-row md:justify-center"
              >
                <button className="btn-white my-1 md:my-0">Order Now</button>
              </div>
            </Fade>
          </div>
        </main>
      </div>
    </>
  );
}

export default SolarRoof;
