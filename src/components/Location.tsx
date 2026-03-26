"use client";

import { useReveal } from "@/hooks/useReveal";

const INFO = [
  {
    label: "주소",
    value: "서울특별시 서초구 서초대로 250 법조빌딩 12층",
    sub: "서초역 2번 출구 도보 3분",
  },
  {
    label: "전화",
    value: "02-1234-5678",
    sub: "팩스 02-1234-5679",
  },
  {
    label: "상담시간",
    value: "평일 09:00 — 18:00",
    sub: "야간·주말 상담은 사전 예약",
  },
  {
    label: "이메일",
    value: "contact@justice-law.co.kr",
    sub: null,
  },
];

export default function Location() {
  const ref = useReveal();

  return (
    <section id="location" className="py-32 bg-cream relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
          {/* Left - Map */}
          <div className="reveal-left">
            <span className="section-label">Location</span>
            <h2 className="mt-6 text-[2rem] md:text-[2.4rem] font-bold text-primary leading-tight mb-12">
              오시는{" "}
              <span className="font-serif italic font-normal text-accent">길</span>
            </h2>

            {/* Map placeholder */}
            <div className="bg-charcoal aspect-[16/10] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal" />
              <div className="text-center relative z-10">
                <svg
                  className="w-12 h-12 text-accent/30 mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={0.8}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={0.8}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-white/30 text-[11px] tracking-widest uppercase">
                  Map Integration
                </p>
              </div>
            </div>
          </div>

          {/* Right - Info */}
          <div className="reveal-right lg:pt-24">
            <div className="space-y-0">
              {INFO.map((item, i) => (
                <div
                  key={item.label}
                  className={`py-8 ${
                    i > 0 ? "border-t border-accent/10" : ""
                  }`}
                >
                  <div className="text-accent text-[10px] tracking-[0.3em] uppercase mb-3">
                    {item.label}
                  </div>
                  <div className="text-primary font-medium text-[15px] tracking-wide">
                    {item.value}
                  </div>
                  {item.sub && (
                    <div className="text-gray-400 text-[12px] mt-1.5 font-light">
                      {item.sub}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
