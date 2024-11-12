"use client";

import React, { useState } from "react";
import { Link, Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full text-[#1a2434] flex font-semibold py-4 bg-[#F9FCFF]">
      <a href="/">
        <Image alt="logo" src={Logo} className="mx-[20px] md:mx-[80px]" />
      </a>
      <div className="flex-1 flex justify-end md:hidden">
        <button onClick={toggleMenu} className="mr-4">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <div
        className={`hidden md:flex items-center justify-center gap-[48px] ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <div>
          <a href="/#About" className="text-[20px]">About Us</a>
        </div>
        <div>
          <a href="/#Footer" className="text-[20px]">Contact</a>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#F9FCFF] shadow-md p-4 z-10">
          <div className="flex flex-col items-center gap-4">
            <a href="/#About" className="text-[20px]">About Us</a>
            <a href="/#Footer" className="text-[20px]">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
