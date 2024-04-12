import React from "react";
import Image from "next/image";
import { appleImg, bagImg, searchImg } from "@/utils";
import { navLists } from "@/constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Image
          className="w-auto h-auto"
          width={14}
          height={18}
          src={appleImg}
          alt="Apple"
          priority
        />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer
            text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <Image
            className="w-auto h-auto"
            src={searchImg}
            alt="Search"
            width={18}
            height={18}
            priority
          />
          <Image
            className="w-auto h-auto"
            src={bagImg}
            alt="Bag"
            width={18}
            height={18}
            priority
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
