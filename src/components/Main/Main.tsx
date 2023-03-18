"use client";

import Sections from "./Sections";
import SectionsShop from "./SectionsShop";
import React from "react";
import { useRouter } from "next/router";

type SectionsProps = {
  Sections: string;
};

type SectionsShopProps = {
  SectionsShop: string;
};

function Main() {
  const router = useRouter();

  return (
    <main>
      <Sections
        title="Model 3"
        description="Leasing starting at $349/mo"
        backgroundImg="modelS.png"
        leftBtnText={
          <button
            onClick={() => router.push("/Model-3/Custom3")}
            className="w-full h-full"
          >
            Custom Order
          </button>
        }
        rightBtnText={
          <button
            onClick={() => router.push("/DemoDrive/DemoDrive")}
            className="w-full h-full"
          >
            Demo Drive
          </button>
        }
      />

      <Sections
        title="Model Y"
        description=""
        backgroundImg="modelY.jpg"
        leftBtnText={
          <button
            onClick={() => router.push("/Model-Y/CustomY")}
            className="w-full h-full"
          >
            Custom Order
          </button>
        }
        rightBtnText={
          <button
            onClick={() => router.push("/DemoDrive/DemoDrive")}
            className="w-full h-full"
          >
            Demo Drive
          </button>
        }
      />

      <Sections
        title="Model S"
        description="Schedule a Demo Drive"
        backgroundImg="modelS.jpg"
        leftBtnText={
          <button
            onClick={() => router.push("/Model-S/CustomS")}
            className="w-full h-full"
          >
            Custom Order
          </button>
        }
        rightBtnText={
          <button
            onClick={() => router.push("/DemoDrive/DemoDrive")}
            className="w-full h-full"
          >
            Demo Drive
          </button>
        }
      />

      <Sections
        title="Model X"
        description="Schedule a Demo Drive"
        backgroundImg="modelX.jpg"
        leftBtnText={
          <button
            onClick={() => router.push("/Model-X/CustomX")}
            className="w-full h-full"
          >
            Custom Order
          </button>
        }
        rightBtnText={
          <button
            onClick={() => router.push("/DemoDrive/DemoDrive")}
            className="w-full h-full"
          >
            Demo Drive
          </button>
        }
      />

      <Sections
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solarPanel.jpg"
        leftBtnText={
          <button
            onClick={() => router.push("/SolarPanels/OrderSolarPanel")}
            className="w-full h-full"
          >
            Order Now
          </button>
        }
        rightBtnText={
          <button
            onClick={() => router.push("/SolarPanels/SolarPanel")}
            className="w-full h-full"
          >
            Learn More
          </button>
        }
      />

      <Sections
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solarRoof.jpg"
        leftBtnText={
          <button
            onClick={() => router.push("SolarRoof/OrderSolarRoof")}
            className="w-full h-full"
          >
            Order Now
          </button>
        }
        rightBtnText={
          <button
            onClick={() => router.push("/SolarRoof/SolarRoof")}
            className="w-full h-full"
          >
            Learn More
          </button>
        }
      />

      <SectionsShop
        title="Accessories"
        description=""
        backgroundImg="accesories.jpg"
        CentertBtnText={
          <button onClick={() => router.push("Shop")} className="w-full h-full">
            Shop Now
          </button>
        }
      />
    </main>
  );
}

export default Main;
