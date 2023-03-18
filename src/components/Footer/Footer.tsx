import React from "react";

function Footer() {
  return (
    <div className="w-full  items-center justify-center md:h-[10vh] h-[15vh] text-sm text-gray-500 md:flex text-center my-5">
      <p className="mx-2 py-1 md:py-0">Tesla © 2023</p>
      <p className="mx-2 py-1 md:py-0">Privacy & Legal</p>
      <p className="mx-2 py-1 md:py-0">Vehicle Recalls</p>
      <p className="mx-2 py-1 hidden md:flex">Contact</p>
      <p className="mx-2 py-1 md:py-0">Careers</p>
      <p className="mx-2 py-1 md:py-0">News</p>
      <p className="mx-2 py-1 hidden md:flex">Engage</p>
      <p className="mx-2 py-1 hidden md:flex">Locations</p>
    </div>
  );
}

export default Footer;
