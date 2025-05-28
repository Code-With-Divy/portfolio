"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
    <header>
      <div className="sticky top-0 z-50 bg-gradient-to-r from-slate-700 to-slate-950 shadow-md rounded flex justify-between items-center py-4 px-4">
        <h1 className="text-gray-100 font-bold select-none cursor-pointer">Portfolio</h1>

        {/* Menu */}
        <ul className="flex gap-2 lg:gap-8 text-white font-bold">
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