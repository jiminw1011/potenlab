"use client";

import { useState, useEffect } from "react";

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
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-edu-teal rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg">EduEducator</span>
          </a>

          {/* Desktop Menu */}
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

          {/* Right: CTA + Hamburger */}
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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
