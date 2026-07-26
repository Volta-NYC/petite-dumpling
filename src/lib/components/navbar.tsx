"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import title from "@/assets/title.png";
import { ArrowUp, ShoppingBag } from "lucide-react";

const navItems = [
  { href: "#menu", id: "menu", label: "menu" },
  { href: "#locations", id: "locations", label: "locations" },
  { href: "#contact", id: "contact", label: "contact" },
  { href: "#order", id: "order", label: "order" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("menu");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-35% 0px -52% 0px",
        threshold: [0.08, 0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full">
        <div
          className={`
            flex items-center justify-between
            px-4 sm:px-6 md:px-10
            h-[82px] sm:h-[92px] md:h-[104px] lg:h-[118px]
            transition-all duration-500 ease-out
            backdrop-blur-xl
            ${scrolled
              ? "h-[68px] sm:h-[72px] md:h-[76px] lg:h-[86px] bg-[#fff8ed]/86 shadow-[0_10px_40px_rgba(49,35,18,0.14)]"
              : "bg-transparent"}
          `}
        >
          <a
            href="#"
            aria-label="Petite Dumpling home"
            className="
              flex shrink-0 items-center
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            "
          >
            <Image
              src={title}
              alt="Petite Dumpling"
              priority
              className={`
                h-auto object-contain logo-glow
                transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${scrolled
                  ? "w-[118px] sm:w-[145px] md:w-[176px] lg:w-[230px]"
                  : "w-[150px] sm:w-[185px] md:w-[220px] lg:w-[320px]"}
              `}
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
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`
                nav-link transition-colors duration-300
                text-[18px] md:text-[20px] lg:text-[24px]
                ${activeSection === item.id ? "is-active" : ""}
                ${scrolled ? "text-[#312312]" : "text-[#FFEB8D]"}
              `}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#order"
            className={`
              cta-sweep hidden items-center gap-2 rounded-full px-5 py-3
              text-[15px] font-extrabold shadow-[0_12px_26px_rgba(237,195,1,0.24)]
              transition duration-300 lg:inline-flex
              ${scrolled
                ? "translate-y-0 bg-[#EDC301] text-white opacity-100"
                : "pointer-events-none translate-y-2 bg-[#EDC301] text-white opacity-0"}
            `}
          >
            <ShoppingBag size={18} strokeWidth={2.5} />
            Order now
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
    ${open ? "opacity-0" : ""}
  `}
/>
<span
  className={`
    block h-[2px] w-5 rounded-full transition-all duration-300
    ${scrolled ? "bg-[#312312]" : "bg-[#FFEB8D]"}
    ${open ? "-translate-y-[7px] -rotate-45" : ""}
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
            <div className="rounded-[18px] bg-white/70 px-4 py-3 text-[#312312] shadow-sm">
              <p className="text-[13px] font-extrabold">Two Brooklyn locations</p>
              <p className="mt-1 text-[13px]">Park Slope and Prospect Heights</p>
            </div>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  nav-link text-[18px]
                  ${activeSection === item.id ? "is-active text-[#312312]" : "text-[#312312]"}
                `}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="cta-sweep inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#EDC301] px-5 text-[15px] font-extrabold text-white"
            >
              Order now
            </a>
          </div>
        </div>
      </div>
      </nav>

      <a
        href="#"
        aria-label="Back to top"
        className={`
          fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full
          bg-[#312312] text-[#FFEB8D] shadow-[0_14px_30px_rgba(49,35,18,0.24)]
          transition duration-300 hover:-translate-y-1 hover:bg-[#C92F28]
          ${scrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}
        `}
      >
        <ArrowUp size={20} strokeWidth={2.6} />
      </a>
    </>
  );
}
