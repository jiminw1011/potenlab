"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "소개", href: "#about" },
  { label: "업무분야", href: "#practice" },
  { label: "구성원", href: "#team" },
  { label: "오시는 길", href: "#location" },
  { label: "상담문의", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md py-4 shadow-2xl shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="w-9 h-9 border border-accent/60 group-hover:border-accent transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-accent text-xl font-semibold italic">
                J
              </span>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="text-white text-[15px] font-medium tracking-[0.15em]">
              법무법인 정의
            </div>
            <div className="text-accent/50 text-[9px] tracking-[0.4em] uppercase font-light mt-0.5">
              Justice & Integrity
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/50 hover:text-white text-[13px] tracking-[0.12em] transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="tel:02-1234-5678"
            className="ml-6 text-accent text-[13px] tracking-wider border border-accent/30 px-6 py-2 hover:bg-accent hover:text-primary transition-all duration-300"
          >
            02-1234-5678
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-4 h-px bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-primary/98 backdrop-blur-xl transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/60 hover:text-accent text-lg tracking-[0.2em] transition-colors duration-300"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 pt-8 border-t border-white/10">
            <a
              href="tel:02-1234-5678"
              className="text-accent text-sm tracking-widest"
            >
              02-1234-5678
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
