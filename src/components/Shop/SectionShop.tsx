"use client";

import React from "react";
import SectionShopAccesories from "./SectionShopAccesories";
import SectionShopAppareal from "./SectionShopAppareal";
import SectionShopLifyStyle from "./SectionShopLifyStyle";

type SectionsShopProps = {
  Sections: string;
};

function SectionShopReducers() {
  return (
    <main>
      <SectionShopAccesories
        title="Model S Accesories"
        BtnCenter="Shop Now"
        backgroundImage="shop-background-1.jpg"
      />

      <SectionShopAccesories
        title="Model 3 Accesories"
        BtnCenter="Shop Now"
        backgroundImage="shop-background-2.jpg"
      />

      <SectionShopAccesories
        title="Model X Accesories"
        BtnCenter="Shop Now"
        backgroundImage="shop-background-3.jpg"
      />

      <SectionShopAccesories
        title="Model Y Accesories"
        BtnCenter="Shop Now"
        backgroundImage="shop-background-4.jpg"
      />

      <SectionShopAccesories
        title="Charging"
        BtnCenter="Shop Now"
        backgroundImage="shop-background-5.jpg"
      />

      <SectionShopAppareal />

      <SectionShopLifyStyle
        title="LifeStyle"
        BtnCenter="Shop Now"
        backgroundImage="shop-background-6.jpg"
      />
    </main>
  );
}

export default SectionShopReducers;
