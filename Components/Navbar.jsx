"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
const Navbardata = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Cars for sale",
    route: "/pages/search",
  },
  {
    name: "Sell your car",
    route: "/",
  },
  {
    name: "Services",
    route: "/",
  },
  {
    name: "About us",
    route: "/",
  },
  {
    name: "Contact us",
    route: "/",
  },
  {
    name: "Blog",
    route: "/",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      {/* for big screens */}

      <div className="hidden md:flex justify-between bg-transparent w-full px-3 py-3">
        {/* links */}
        <div className="flex pt-3 gap-4">
          {Navbardata.map(({ name, route }, index) => {
            return (
              <Link
                key={index}
                href={route}
                className="font-bold hover:text-red-600
               "
              >
                {name}
              </Link>
            );
          })}
        </div>
        {/* logo*/}
        <div>
        <div className="w-10 h-10 md:w-12 md:h-12  relative">
          <Image src="/logo.png" layout="fill" />
        </div>
        </div>
      </div>

      {/* for small screens */}
      <button  onClick={toggleDrawer} className="md:hidden inline-block  p-2">
      <div className="w-10 h-10 md:w-12 md:h-12  relative">
          <Image src="/logo.png" layout="fill" />
        </div>
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right" className="!w-full">
        <div className="flex bg-[url('/background.png')] h-full items-center pt-3 font-extrabold w-full flex-col gap-4">
          {Navbardata.map(({ name, route }, index) => {
            return (
              <Link
                key={index}
                href={route}
                className=" hover:text-red-500
                 hover:bg-gray-700 w-full text-center text-white rounded-md px-3 py-2 text-base font-medium"
              >
                <button onClick={() => setIsOpen(false)}>{name}</button>
              </Link>
            );
          })}
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
