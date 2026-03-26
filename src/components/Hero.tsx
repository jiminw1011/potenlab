"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden noise">
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-accent/[0.06] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-accent/[0.04] via-transparent to-transparent" />
      </div>

      {/* Geometric decorations */}
      <div className="absolute top-[15%] right-[10%] w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-[20%] left-[8%] w-px h-48 bg-gradient-to-b from-transparent via-accent/15 to-transparent" />
      <div className="absolute top-[40%] left-[15%] w-20 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

      {/* Large decorative serif letter */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 font-serif text-[20rem] md:text-[28rem] font-bold text-white/[0.015] select-none leading-none pointer-events-none">
        J
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Tag */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <span className="section-label text-[10px]">
                Law Firm Justice & Integrity
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`mt-8 transition-all duration-1000 delay-400 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block text-white/90 text-[1.4rem] md:text-[1.7rem] font-light leading-[1.6] tracking-wide">
                신뢰와 전문성으로
              </span>
              <span className="block text-white text-[1.6rem] md:text-[2rem] font-bold leading-[1.5] mt-1">
                <span className="text-accent">의뢰인의 권리</span>를 지킵니다
              </span>
            </h1>

            {/* Divider */}
            <div
              className={`mt-8 w-16 h-px bg-gradient-to-r from-accent/80 to-transparent transition-all duration-1000 delay-500 ${
                loaded
                  ? "opacity-100 scale-x-100 origin-left"
                  : "opacity-0 scale-x-0"
              }`}
            />

            {/* Description */}
            <p
              className={`mt-8 text-slate text-[15px] leading-[1.9] max-w-md font-light transition-all duration-1000 delay-600 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              30년의 경험과 실력을 갖춘 전문 변호사들이
              <br />
              최선의 법률 서비스를 제공합니다
            </p>

            {/* CTA */}
            <div
              className={`mt-12 flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="#contact"
                className="group relative bg-accent text-primary font-medium px-8 py-3.5 text-[13px] tracking-wider overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-accent/15"
              >
                <span className="relative z-10">무료 상담 신청</span>
                <div className="absolute inset-0 bg-accent-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </a>
              <a
                href="#practice"
                className="text-white/40 hover:text-white px-8 py-3.5 text-[13px] tracking-wider border border-white/10 hover:border-white/30 transition-all duration-500"
              >
                업무분야 보기
              </a>
            </div>
          </div>

          {/* Right - Stats column */}
          <div
            className={`hidden lg:flex flex-col gap-0 border-l border-white/[0.06] pl-16 transition-all duration-1000 delay-800 ${
              loaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {[
              { number: "30+", label: "년 경력" },
              { number: "5,000+", label: "성공 사례" },
              { number: "15", label: "전문 변호사" },
              { number: "98%", label: "의뢰인 만족도" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`py-6 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
              >
                <div className="font-serif text-accent text-4xl font-light italic">
                  {stat.number}
                </div>
                <div className="text-white/30 text-[10px] tracking-[0.3em] uppercase mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stats */}
        <div
          className={`lg:hidden mt-20 grid grid-cols-4 border-t border-white/[0.06] pt-8 transition-all duration-1000 delay-900 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { number: "30+", label: "년 경력" },
            { number: "5,000+", label: "사례" },
            { number: "15", label: "변호사" },
            { number: "98%", label: "만족도" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i > 0 ? "border-l border-white/[0.06]" : ""}`}
            >
              <div className="font-serif text-accent text-2xl font-light italic">
                {stat.number}
              </div>
              <div className="text-white/25 text-[9px] tracking-wider uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/20 text-[9px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
