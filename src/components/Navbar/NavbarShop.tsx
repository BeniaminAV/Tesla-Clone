"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Logo, LogoWhite } from "../../../public/index";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function NavbarShop() {
  const [nav, setNav] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const logoSrc = hovered ? Logo : LogoWhite;

  return (
    <>
      <nav
        className="w-full fixed top-0 z-10 h-[55px] hover:bg-white text-white hover:text-black ease-in duration-150 p-5 mx-auto flex items-center justify-between "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          onClick={() => router.push("/")}
          className="cursor-pointer flex items-center justify-center"
        >
          <Image src={logoSrc} alt="logo" className="w-[120px] h-[14px]" />
        </div>

        <div className="hidden xl:flex justify-center items-center">
          <button className="nav-link-shopBar">Charging</button>
          <button className="nav-link-shopBar">Vehicle Accessories</button>
          <button className="nav-link-shopBar">Apparel</button>
          <button className="nav-link-shopBar">Lifestyle</button>
        </div>

        <div className="hidden xl:flex  items-center justify-center">
          <button
            className="nav-link nav-link-shopBar"
            onClick={() => router.push("/Shop")}
          >
            Shop
          </button>

          {session ? (
            <div className="flex items-center justify-center cursor-pointer mx-2">
              <img
                onClick={() => signOut()}
                src={session.user!.image!}
                alt="User profile"
                className="h-8 w-8 rounded-full mr-1"
              />
            </div>
          ) : (
            <div></div>
          )}

          <button className="nav-link-shopBar" onClick={handleNav}>
            Menu
          </button>
        </div>

        <div className="xl:hidden">
          <button
            onClick={handleNav}
            className="bg-black/10 hover:bg-black/20  font-semibold rounded-lg transition ease-in duration-150 px-3 py-1"
          >
            Menu
          </button>
        </div>
      </nav>

      <div
        className={
          nav
            ? "fixed right-0 top-0 w-full h-screen bg-black/70  ease-in duration-500 z-[100]"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 sm:w-[20] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-[100]"
              : "fixed right-[-140%] top-0 p-10 ease-in duration-500 z-[100]"
          }
        >
          <div>
            <div onClick={handleNav} className="flex items-center justify-end">
              <XMarkIcon className="w-6 h-6 hover:bg-black/20  font-semibold rounded-sm cursor-pointer text-gray-700 transition ease-in duration-150 " />
            </div>

            <div className="flex flex-col mt-10">
              <button className="nav-link-shop my-1">Charging</button>
              <button className="nav-link-shop my-1">Vehicle Accesories</button>
              <button className="nav-link-shop my-1">Apparel</button>
              <button className="nav-link-shop my-1">Lifestyle</button>
              <button className="nav-link-shop my-1">Shop FAQ</button>
            </div>

            <div className="flex items-center justify-center mt-20">
              {session ? (
                <div className="flex flex-col items-center justify-center cursor-pointer mx-2">
                  <div>
                    <img
                      onClick={() => signOut()}
                      src={session.user!.image!}
                      alt="User profile"
                      className="h-15 w-15 rounded-full mr-1"
                    />
                  </div>
                  <p className="ml-1 font-semibold text-lg sm:text-2xl">
                    {session.user!.name}
                  </p>
                </div>
              ) : (
                <button
                  onClick={() => signIn("google")}
                  className="nav-link-shop"
                >
                  Account
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarShop;
