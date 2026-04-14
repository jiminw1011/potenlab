"use client";

import { useState, useEffect } from "react";
import { BookOpen, Menu } from "lucide-react";

const navLinks = [
  { href: "#mission", label: "Our Mission" },
  { href: "#solutions", label: "Solutions" },
  { href: "#integration", label: "Integration & Security" },
  { href: "#support", label: "Support" },
];

export default function EduHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-edu-navy/95 backdrop-blur-md ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 relative">
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-edu-teal rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg">EduEducator</span>
          </a>

          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-300 hover:text-white text-sm font-medium transition-colors after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-edu-teal after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#cta"
              className="hidden lg:inline-block bg-edu-orange hover:bg-edu-orange-light text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Schedule a Demo
            </a>
            <button
              className="lg:hidden text-white p-2"
              aria-label="Menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="py-4 space-y-3 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-300 hover:text-white text-sm font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="inline-block bg-edu-orange hover:bg-edu-orange-light text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
