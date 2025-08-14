import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../index.css";
import Logo from "../assets/logo.png";
import FullLogo from "../assets/qonstech-nobg.png";

function Navbar() {
  return (
    <div className="sticky z-50 top-0 flex h-[80px] w-full shadow-2xs items-center bg-white flex-row justify-between px-[25px] py-3 transition-colors duration-300 ease-in sm:px-[50px] md:px-[150px]">
      <div className="flex w-[50%] h-full justify-start items-center">
        <img
          src={FullLogo}
          alt="qonstech-full-logo"
          className="w-auto h-[100%] object-contain mt-5"
        />
      </div>
      <div className="flex w-[50%] justify-end items-end gap-5 space-x-8 text-[16px] font-semibold">
        <a href="/" className="text-blue-950 hover:text-blue-600">
          Home
        </a>
        <Link
          to="about"
          smooth={true}
          duration={300}
          className="cursor-pointer text-blue-950 hover:text-blue-600"
        >
          About
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={300}
          className="cursor-pointer text-blue-950 hover:text-blue-600"
        >
          Projects
        </Link>
        <a href="/contact" className="text-blue-950 hover:text-blue-600">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
