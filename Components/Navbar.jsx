"use client";
import React, { useState, useEffect } from "react";
import { Data } from "@/constant/Data";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [navLinkTitles, setNavLinkTitles] = useState([]);

  useEffect(() => {
    const titles = Data.Navbardata.map((navItem) => ({
      title: navItem.name,
      path: navItem.route,
    }));
    setNavLinkTitles(titles);
  }, []);

  return (
    <div className="flex justify-around w-full  bg-neutral-700  px-[10px] py-[10px] ">
      <div>
        {navLinkTitles.map(({ title, path }, index) => (
          <Link
            key={index}
            href={path}
            className=" font-bold px-[10px] py-[10px] text-[10px] bg-neutral-700  text-white sm:text-[12px] md:text-[14px] lg:text-[17px] font-InriaSerif "
          >
            {title}
          </Link>
        ))}
      </div>

      <Image src="/logo.png" alt="" width={30} height={30} />
    </div>
  );
};

export default Navbar;
