"use client";

import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";

function ModelS() {
  const router = useRouter();
  const sectionStyle = {
    backgroundImage: `url("/Article/ModelS.jpg")`,
  };

  return (
    <>
      <div>
        <Head>
          <title>Model S | Tesla</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/icon.png" />
        </Head>

        <main
          style={sectionStyle}
          className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 left-0">
            <Navbar />
          </div>

          <div className="pt-[15vh] text-center">
            <h1 className="text-black text-4xl font-bold">Model S</h1>
            <p className="text-gray-700 text-xl">Plaid</p>
          </div>

          <div className="mb-[10vh]">
            <div className="flex text-white items-center justify-center w-full my-5">
              <Fade delay={100}>
                <div className="detail-show">
                  <h2 className="md:text-2xl text-md font-bold">396 mi</h2>
                  <p className="md:text-sm text-[10px] font-bold">
                    Range(Epa est.)
                  </p>
                </div>
              </Fade>

              <Fade delay={200}>
                <div className="detail-show">
                  <h2 className="md:text-2xl text-md font-bold">396 mi</h2>
                  <p className="md:text-sm text-[10px] font-bold">
                    Range(Epa est.)
                  </p>
                </div>
              </Fade>

              <Fade delay={300}>
                <div className="detail-show">
                  <h2 className="md:text-2xl text-md font-bold">396 mi</h2>
                  <p className="md:text-sm text-[10px] font-bold">
                    Range(Epa est.)
                  </p>
                </div>
              </Fade>

              <Fade delay={400}>
                <div className="detail-show">
                  <h2 className="md:text-2xl text-md font-bold hidden md:flex items-center justify-center">
                    396 mi
                  </h2>
                  <p className="md:text-sm text-[10px] font-bold hidden md:flex items-center justify-center">
                    Range(Epa est.)
                  </p>
                </div>
              </Fade>
            </div>

            <Fade delay={500}>
              <div className="flex flex-col items-center md:flex-row md:justify-center">
                <button
                  onClick={() => router.push("/Model-S/CustomS")}
                  className="btn-white my-1 md:my-0"
                >
                  Custom Order
                </button>
                <button
                  onClick={() => router.push("/DemoDrive/DemoDrive")}
                  className="btn-black my-1 md:my-0"
                >
                  Demo Drive
                </button>
              </div>
            </Fade>
          </div>
        </main>
      </div>
    </>
  );
}

export default ModelS;