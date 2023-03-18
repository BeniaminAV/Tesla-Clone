"use client";

import Image from "next/image";
import React, { useState } from "react";
import { LogoWhite } from "../../../public/index";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function NavbarWhite() {
  const [nav, setNav] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="sticky top-0 z-10 max-w-full h-[55px] p-5 mx-auto flex items-center justify-between container">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image src={LogoWhite} alt="logo" className="w-[120px] h-[14px]" />
        </div>

        <div className="hidden xl:flex justify-center items-center text-white">
          <button
            className="nav-link"
            onClick={() => router.push("/Model-S/ModelS")}
          >
            Model S
          </button>
          <button
            className="nav-link"
            onClick={() => router.push("/Model-3/Model3")}
          >
            Model 3
          </button>
          <button
            className="nav-link"
            onClick={() => router.push("/Model-X/ModelX")}
          >
            Model X
          </button>
          <button
            className="nav-link"
            onClick={() => router.push("/Model-Y/ModelY")}
          >
            Model Y
          </button>
          <button
            className="nav-link"
            onClick={() => router.push("/SolarRoof/SolarRoof")}
          >
            Solar Roof
          </button>
          <button
            className="nav-link"
            onClick={() => router.push("/SolarPanels/SolarPanel")}
          >
            Solar Panels
          </button>
          <button
            className="nav-link"
            onClick={() => router.push("/PowerWall/PowerWall")}
          >
            Powerwall
          </button>
        </div>

        <div className="hidden xl:flex  items-center justify-center text-white">
          <button className="nav-link" onClick={() => router.push("/Shop")}>
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
            <button onClick={() => signIn("google")} className="nav-link">
              Account
            </button>
          )}

          <button className="nav-link" onClick={handleNav}>
            Menu
          </button>
        </div>

        <div className="xl:hidden">
          <button
            onClick={handleNav}
            className="bg-black/10 hover:bg-black/20  font-semibold rounded-lg text-white text-sm transition ease-in duration-150 px-3 py-1"
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

            <div className="flex flex-col items-start justify-center mt-10">
              <button className="nav-link" onClick={() => router.push("/Shop")}>
                Shop
              </button>
              <button
                className="nav-link my-1"
                onClick={() => router.push("/Model-S/ModelS")}
              >
                Model S
              </button>
              <button
                className="nav-link my-1"
                onClick={() => router.push("/Model-3/Model3")}
              >
                Model 3
              </button>
              <button
                className="nav-link my-1"
                onClick={() => router.push("/Model-X/ModelX")}
              >
                Model X
              </button>
              <button
                className="nav-link my-1"
                onClick={() => router.push("/Model-Y/ModelY")}
              >
                Model Y
              </button>
              <button
                className="nav-link my-1"
                onClick={() => router.push("/SolarRoof/SolarRoof")}
              >
                Solar Roof
              </button>
              <button
                className="nav-link my-1"
                onClick={() => router.push("/SolarPanels/SolarPanel")}
              >
                Solar Panels
              </button>
              <button
                className="nav-link my-1"
                onClick={() => router.push("/PowerWall/PowerWall")}
              >
                Powerwall
              </button>
            </div>

            <div className="flex items-center justify-center mt-20">
              {session ? (
                <div className="flex flex-col items-center justify-center cursor-pointer mx-2">
                  <div>
                    <img
                      onClick={() => signOut()}
                      src={session.user!.image!}
                      alt="User profile"
                      className="h-8 w-8 rounded-full mr-1"
                    />
                  </div>
                  <p className="ml-1 font-semibold text-sm">
                    {session.user!.name}
                  </p>
                </div>
              ) : (
                <button onClick={() => signIn("google")} className="nav-link">
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

export default NavbarWhite;
