import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import {
  Model3Demo,
  ModelSDemo,
  ModelXDemo,
  ModelYDemo,
} from "../../../public";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function DemoDrive() {
  const [selectedModel, setSelectedModel] = useState("Model S");
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (model: string) => {
    setSelectedModel(model);
    setSelectedButton(model);
  };

  const handleButtonHover = (button: string) => {
    if (button !== selectedButton) {
      setSelectedButton(button);
    }
  };

  return (
    <>
      <Navbar />
      <main className="w-full max-w-full md:mt-[20vh] mt-[10vh]">
        <div className="md:mx-[25%] mx-[5%]">
          <h2 className="text-black text-3xl font-semibold">
            Schedule a Demo Drive
          </h2>
          <p className="text-gray-700 text-sm">
            Demo Drive a Tesla at a store near you. Drivers must have a valid
            U.S. driver's license and be 18 years of age or older.
          </p>
        </div>

        <div className="max-w-full">
          <div className="md:mx-[25%] mx-[5%]">
            <Fade delay={300}>
              {selectedModel === "Model S" && (
                <Image src={ModelSDemo} alt="Model S" />
              )}

              {selectedModel === "Model 3" && (
                <Image src={Model3Demo} alt="Model 3" />
              )}

              {selectedModel === "Model X" && (
                <Image src={ModelXDemo} alt="Model X" />
              )}

              {selectedModel === "Model Y" && (
                <Image src={ModelYDemo} alt="Model Y" />
              )}
            </Fade>
          </div>

          <div className="mx-auto w-full text-center md:flex items-center justify-center mb-[10vh]">
            <button
              className={`w-[200px] h-[40px] border-2 rounded-md text-gray-500 text-center my-1 mx-1  ${
                selectedButton === "Model S" ? "btnBlue" : ""
              }`}
              onClick={() => handleButtonClick("Model S")}
            >
              Model S
            </button>
            <button
              className={`w-[200px] h-[40px] border-2 rounded-md text-gray-500 text-center my-1 mx-1  ${
                selectedButton === "Model 3" ? "btnBlue" : ""
              }`}
              onClick={() => handleButtonClick("Model 3")}
            >
              Model 3
            </button>
            <button
              className={`w-[200px] h-[40px] border-2 rounded-md text-gray-500 text-center my-1 mx-1  ${
                selectedButton === "Model X" ? "btnBlue" : ""
              }`}
              onClick={() => handleButtonClick("Model X")}
            >
              Model X
            </button>
            <button
              className={`w-[200px] h-[40px] border-2 rounded-md text-gray-500 text-center my-1 mx-1  ${
                selectedButton === "Model Y" ? "btnBlue" : ""
              }`}
              onClick={() => handleButtonClick("Model Y")}
            >
              Model Y
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default DemoDrive;
