"use client";

import { useReveal } from "@/hooks/useReveal";

const PRACTICES = [
  {
    num: "01",
    title: "기업법무",
    desc: "기업 설립, M&A, 계약서 검토, 기업 구조조정, 주주 분쟁 등 기업 활동 전반에 걸친 법률 자문을 제공합니다.",
  },
  {
    num: "02",
    title: "형사",
    desc: "수사 단계부터 재판까지 형사 사건의 모든 과정에서 의뢰인의 권리를 적극적으로 보호합니다.",
  },
  {
    num: "03",
    title: "민사 · 손해배상",
    desc: "계약 분쟁, 손해배상 청구, 채권 추심 등 민사 사건 전반에 대한 전문적인 소송 대리를 수행합니다.",
  },
  {
    num: "04",
    title: "부동산",
    desc: "부동산 매매, 임대차, 재개발·재건축, 등기, 경매 등 부동산 관련 법률 문제를 종합적으로 해결합니다.",
  },
  {
    num: "05",
    title: "가사 · 이혼",
    desc: "이혼, 양육권, 재산분할, 상속 분쟁 등 가사 사건을 섬세하고 전문적으로 처리합니다.",
  },
  {
    num: "06",
    title: "노동 · 행정",
    desc: "부당해고, 임금 체불, 산업재해, 행정소송 등 노동 및 행정 분야의 법률 서비스를 제공합니다.",
  },
];

export default function Practice() {
  const ref = useReveal();

  return (
    <section id="practice" className="py-32 bg-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 reveal">
          <div>
            <span className="section-label">Practice Areas</span>
            <h2 className="mt-6 text-[2rem] md:text-[2.4rem] font-bold text-primary leading-tight">
              <span className="font-serif italic font-normal text-accent">전문</span>{" "}
              업무분야
            </h2>
          </div>
          <p className="text-gray-400 text-[14px] leading-[1.9] max-w-md font-light">
            법무법인 정의는 다양한 법률 분야에서 풍부한 경험과 전문성을
            바탕으로 최적의 솔루션을 제공합니다
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-100">
          {PRACTICES.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i < 5 ? i + 1 : 5} group p-10 border-b border-r border-gray-100 cursor-pointer transition-all duration-500 hover:bg-primary relative overflow-hidden`}
            >
              {/* Hover accent bar */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-700" />

              <span className="font-serif text-accent/30 text-5xl font-light italic group-hover:text-accent/50 transition-colors duration-500">
                {item.num}
              </span>
              <h3 className="text-lg font-bold text-primary group-hover:text-white mt-4 mb-4 transition-colors duration-500 tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-400 text-[13px] leading-[1.9] font-light transition-colors duration-500">
                {item.desc}
              </p>

              {/* Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-8px] group-hover:translate-x-0">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
