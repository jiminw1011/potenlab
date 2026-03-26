"use client";

import { useReveal } from "@/hooks/useReveal";

const LAWYERS = [
  {
    name: "김정의",
    role: "대표 변호사",
    specialty: "기업법무 / M&A",
    career: [
      "서울대학교 법학전문대학원 졸업",
      "사법시험 제45회 합격",
      "前 대법원 재판연구관",
      "前 김&장 법률사무소",
    ],
  },
  {
    name: "이신뢰",
    role: "수석 변호사",
    specialty: "형사 / 수사변호",
    career: [
      "고려대학교 법학전문대학원 졸업",
      "변호사시험 제2회 합격",
      "前 서울중앙지검 검사",
      "형사전문변호사 인증",
    ],
  },
  {
    name: "박공정",
    role: "파트너 변호사",
    specialty: "부동산 / 건설",
    career: [
      "연세대학교 법학전문대학원 졸업",
      "변호사시험 제3회 합격",
      "부동산전문변호사 인증",
      "대한변호사협회 부동산위원회 위원",
    ],
  },
  {
    name: "최민호",
    role: "파트너 변호사",
    specialty: "가사 / 상속",
    career: [
      "성균관대학교 법학전문대학원 졸업",
      "변호사시험 제4회 합격",
      "가사전문변호사 인증",
      "서울가정법원 조정위원",
    ],
  },
];

export default function Team() {
  const ref = useReveal();

  return (
    <section id="team" className="py-32 bg-primary relative noise overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-20 reveal">
          <span className="section-label justify-center">
            Our Team
          </span>
          <h2 className="mt-6 text-[2rem] md:text-[2.4rem] font-bold text-white leading-tight">
            <span className="font-serif italic font-normal text-accent">구성원</span>{" "}
            소개
          </h2>
          <p className="text-slate/60 mt-6 max-w-lg mx-auto text-[14px] leading-[1.9] font-light">
            각 분야 최고의 전문성과 풍부한 실무 경험을 갖춘 변호사들이
            의뢰인을 위해 최선을 다합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LAWYERS.map((lawyer, i) => (
            <div
              key={lawyer.name}
              className={`reveal reveal-delay-${i + 1} group cursor-pointer`}
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] bg-charcoal overflow-hidden mb-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-serif text-white/[0.06] text-[8rem] font-bold italic select-none">
                    {lawyer.name.charAt(0)}
                  </div>
                </div>

                {/* Hover career overlay */}
                <div className="absolute inset-0 bg-primary/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 p-8">
                  <ul className="space-y-3">
                    {lawyer.career.map((item, j) => (
                      <li
                        key={item}
                        className="text-gray-300 text-[12px] leading-relaxed flex items-start gap-2 font-light"
                        style={{ transitionDelay: `${j * 50}ms` }}
                      >
                        <span className="text-accent text-[10px] mt-1">&#9642;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 group-hover:opacity-0 transition-opacity duration-500">
                  <div className="text-accent text-[10px] tracking-[0.3em] uppercase font-light">
                    {lawyer.specialty}
                  </div>
                </div>
              </div>

              {/* Info bar */}
              <div className="bg-primary-light border border-white/[0.05] p-5 group-hover:border-accent/20 transition-colors duration-500">
                <h3 className="text-white text-[15px] font-medium tracking-wider">
                  {lawyer.name}
                </h3>
                <p className="text-accent/70 text-[11px] tracking-[0.2em] uppercase mt-1">
                  {lawyer.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
