"use client";
import React, { useState, useEffect } from "react";
import { Data } from "@/constant/Data";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [navLinkTitles, setNavLinkTitles] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const titles = Data.Navbardata.map((navItem) => ({
      title: navItem.name,
      path: navItem.route,
    }));
    setNavLinkTitles(titles);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" flex justify-between py-[10px]  bg-light-main max-container padding-container  ">
      <div className="">
        {navLinkTitles.map(({ title, path }, index) => (
          <Link
            key={index}
            href={path}
            className=" md:inline-block hidden font-bold px-[10px] py-[10px]   text-black    md:text-[14px] lg:text-[17px] font-InriaSerif  "
          >
            {title}
          </Link>
        ))}
        <div>
          <button className="  md:hidden block  " onClick={toggleMenu}>
            Menu
          </button>
        </div>
      </div>
      {/* small screen menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          {" "}
          <div className=" items-center gap-1 flex flex-col">
            {navLinkTitles.map(({ title, path }, index) => (
              <Link
                key={index}
                href={path}
                className=" font-bold px-[10px] py-[10px]   text-black md:text-[14px] lg:text-[17px] font-InriaSerif  md:hidden bg-white mb-2 w-[400%] text-center "
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className=" w-[70px] h-[70px] relative">
        {" "}
        <Image
          src="/logo.png"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default Navbar;
