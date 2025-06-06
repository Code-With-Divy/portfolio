"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="sticky top-[2vmax] z-50">
        <div className="backdrop-blur-[8px] hover:backdrop-blur-3xl shadow-[0_0_20px_5px_rgb(77,0,109)] p-4 rounded-full flex justify-between items-center px-[2vmax] py-[2.5vmax] mx-[1.5vmax] bg-transparent min-w-[95vw]">
          <h1 className="text-gray-100 font-bold select-none cursor-pointer text-[2.3vmax]">Portfolio</h1>

          <ul className="flex gap-5 lg:gap-8 text-white font-bold text-[1.9vmax]">
            <li><Link href="/#main">Home</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#project">Project</Link></li>
            <li><Link href="/#skills">Skills</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;