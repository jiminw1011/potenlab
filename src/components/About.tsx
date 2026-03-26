"use client";

import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-32 bg-cream relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center">
          {/* Left */}
          <div className="reveal-left">
            <span className="section-label">About Us</span>
            <h2 className="mt-6 text-[2rem] md:text-[2.4rem] font-bold text-primary leading-tight">
              법무법인 정의를
              <br />
              <span className="font-serif italic font-normal text-accent">소개</span>합니다
            </h2>

            <div className="w-12 h-px bg-accent/40 mt-8" />

            <p className="mt-8 text-gray-500 text-[15px] leading-[2] font-light">
              법무법인 정의는 2005년 설립 이래, 의뢰인의 권리 보호와 정의 실현을
              위해 끊임없이 노력해 왔습니다. 각 분야 최고의 전문성을 갖춘
              변호사들이 팀을 이루어 복잡한 법률 문제에 대한 최적의 해결책을
              제시합니다.
            </p>
            <p className="mt-4 text-gray-500 text-[15px] leading-[2] font-light">
              대한변호사협회 우수 법무법인 선정, 소비자 만족도 1위 등 다수의
              수상 경력이 저희의 전문성과 신뢰를 증명합니다.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6">
              {[
                "승소율 92%",
                "신속한 대응",
                "분야별 전문팀",
                "체계적 사건 관리",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent" />
                  <span className="text-[13px] text-gray-600 tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image placeholder with editorial layout */}
          <div className="reveal-right">
            <div className="relative">
              {/* Main image */}
              <div className="bg-charcoal aspect-[4/5] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="text-center relative z-10">
                  <svg
                    className="w-16 h-16 text-white/20 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <p className="text-white/20 text-xs tracking-widest uppercase">
                    Office Interior
                  </p>
                </div>

                {/* Overlaid stat card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/[0.07] backdrop-blur-sm border border-white/10 p-6">
                  <div className="font-serif text-accent text-3xl italic font-light">
                    Since 2005
                  </div>
                  <div className="text-white/50 text-[11px] tracking-widest uppercase mt-2">
                    20년간 의뢰인과 함께
                  </div>
                </div>
              </div>

              {/* Offset decorative frame */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border border-accent/15 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
