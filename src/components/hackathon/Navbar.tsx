"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Linkk from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isVisible = scrollPosition > 100; // Adjust this value based on when you want the navbar to appear

      setIsNavVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed select-none z-50 mt-3 top-0 left-0 hidden md:flex justify-center w-full items-center py-4 md:px-10 transition-opacity duration-300 ${
        isNavVisible ? "opacity-100" : "opacity-0 hidden"
      }`}
    >
      <div className="container flex justify-between items-center rounded-full bg-background/70 border-[1px] font-poppinsR py-4 backdrop-blur-sm">
        <Linkk href="/">
          <Image src="/icon.svg" width={50} height={50} alt="codeblaze" />
        </Linkk>
        <ul className="flex tracking-wider justify-end">
          <li className="mr-6 cursor-pointer hover:font-bold transition">
            <Link to="about" smooth={true} duration={500} offset={-130}>
              About
            </Link>
          </li>
          {/* <li className="mr-6 cursor-pointer hover:font-bold transition">
            <Link to="flow" smooth={true} duration={500}>
              Flow
            </Link>
          </li> */}
          <li className="mr-6 cursor-pointer hover:font-bold transition">
            <Link to="themes" smooth={true} duration={500} offset={-50}>
              Themes
            </Link>
          </li>
          {/* <li className="mr-6 cursor-pointer hover:font-bold transition">
            <Link to="process" smooth={true} duration={500} offset={-50}>
              Registration
            </Link>
          </li> */}
          <li className="mr-6 cursor-pointer hover:font-bold transition">
            <Link to="faq" smooth={true} duration={500} offset={-70}>
              FAQ&apos;s
            </Link>
          </li>
          <li className="mr-6 cursor-pointer hover:font-bold transition">
            <Link to="contact" smooth={true} duration={500} offset={-135}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
