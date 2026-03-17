"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import title from "@/assets/title.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80); // adjust trigger if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
<div
  className={`
    flex items-center justify-between
    px-4 sm:px-6 md:px-10
    h-[82px] sm:h-[92px] md:h-[110px] lg:h-[125px]
    transition-all duration-500 ease-out
    backdrop-blur-xl
    ${scrolled 
      ? "h-[70px] sm:h-[70px] md:h-[80px] lg:h-[110px] shadow-[0_10px_40px_rgba(49,35,18,0.12)]" 
      : "bg-transparent"}
  `}
>
        {/* Logo */}
{/* Logo */}
<a
  href="#"
  className={`
    flex shrink-0 items-center overflow-hidden
    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${scrolled ? "h-0 -translate-y-10 opacity-0" : "h-auto translate-y-0 opacity-100"}
  `}
>
  <Image
    src={title}
    alt="Petite Dumpling"
    priority
    className="
      h-auto w-[150px] sm:w-[185px] md:w-[220px] lg:w-[320px]
      object-contain logo-glow
    "
  />
</a>

        {/* Desktop Nav */}
        <div
          className="
            hidden md:flex items-center
            gap-8
            md:gap-10
            lg:gap-14
            pr-2 lg:pr-8
          "
        >
<a
  href="#menu"
  className={`
    nav-link transition-colors duration-300
    text-[18px] md:text-[20px] lg:text-[24px]
    ${scrolled ? "text-[#312312]" : "text-[#FFEB8D]"}
  `}
>
  menu
</a>
<a
  href="#contact"
  className={`
    nav-link transition-colors duration-300
    text-[18px] md:text-[20px] lg:text-[24px]
    ${scrolled ? "text-[#312312]" : "text-[#FFEB8D]"}
  `}
>
  contact
</a>

<a
  href="#order"
  className={`
    nav-link transition-colors duration-300
    text-[18px] md:text-[20px] lg:text-[24px]
    ${scrolled ? "text-[#312312]" : "text-[#FFEB8D]"}
  `}
>
  order
</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            flex h-10 w-10 flex-col items-center justify-center gap-[5px]
            rounded-full border border-white/10
            bg-white/5 backdrop-blur-md
          "
        >
<span
  className={`
    block h-[2px] w-5 rounded-full transition-all duration-300
    ${scrolled ? "bg-[#312312]" : "bg-[#FFEB8D]"}
    ${open ? "translate-y-[7px] rotate-45" : ""}
  `}
/>
<span
  className={`
    block h-[2px] w-5 rounded-full transition-all duration-300
    ${scrolled ? "bg-[#312312]" : "bg-[#FFEB8D]"}
    ${open ? "translate-y-[7px] rotate-45" : ""}
  `}
/>
<span
  className={`
    block h-[2px] w-5 rounded-full transition-all duration-300
    ${scrolled ? "bg-[#312312]" : "bg-[#FFEB8D]"}
    ${open ? "translate-y-[7px] rotate-45" : ""}
  `}
/>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="glass-nav mx-3 mt-2 rounded-[22px] border border-white/10 px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
          <div className="flex flex-col items-start gap-4">
            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="nav-link text-[18px]"
            >
              menu
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="nav-link text-[18px]"
            >
              contact
            </a>
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="nav-link text-[18px]"
            >
              order
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}