"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="py-32 bg-primary relative noise overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/[0.04] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-20">
          {/* Left - Info */}
          <div className="reveal-left">
            <span className="section-label">Contact</span>
            <h2 className="mt-6 text-[2rem] md:text-[2.4rem] font-bold text-white leading-tight">
              상담{" "}
              <span className="font-serif italic font-normal text-accent">
                문의
              </span>
            </h2>

            <div className="w-12 h-px bg-accent/40 mt-8" />

            <p className="mt-8 text-slate/60 text-[14px] leading-[2] font-light">
              법률 문제로 어려움을 겪고 계신가요?
              <br />
              전문 변호사가 무료로 초기 상담을 제공해 드립니다.
            </p>

            {/* Quick contact cards */}
            <div className="mt-12 space-y-4">
              {[
                { label: "전화 상담", value: "15443344" },
                { label: "카카오톡", value: "ID: justice-law" },
                { label: "방문 상담", value: "사전 예약 필수" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border border-white/[0.06] p-4 hover:border-accent/20 transition-colors duration-300"
                >
                  <span className="text-white/30 text-[11px] tracking-widest uppercase">
                    {item.label}
                  </span>
                  <span className="text-accent text-[14px] font-medium tracking-wide">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal-right">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/30 text-[11px] tracking-widest uppercase mb-3">
                    성함 <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="홍길동"
                    className="w-full bg-transparent border-b border-white/10 text-white text-[14px] pb-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/10 font-light"
                  />
                </div>
                <div>
                  <label className="block text-white/30 text-[11px] tracking-widest uppercase mb-3">
                    연락처 <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="010-0000-0000"
                    className="w-full bg-transparent border-b border-white/10 text-white text-[14px] pb-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/10 font-light"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/30 text-[11px] tracking-widest uppercase mb-3">
                    이메일
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full bg-transparent border-b border-white/10 text-white text-[14px] pb-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/10 font-light"
                  />
                </div>
                <div>
                  <label className="block text-white/30 text-[11px] tracking-widest uppercase mb-3">
                    상담 분야 <span className="text-accent">*</span>
                  </label>
                  <select className="w-full bg-transparent border-b border-white/10 text-white/40 text-[14px] pb-3 focus:outline-none focus:border-accent transition-colors font-light">
                    <option value="" className="bg-primary">
                      선택해주세요
                    </option>
                    <option value="corporate" className="bg-primary">
                      기업법무
                    </option>
                    <option value="criminal" className="bg-primary">
                      형사
                    </option>
                    <option value="civil" className="bg-primary">
                      민사/손해배상
                    </option>
                    <option value="realestate" className="bg-primary">
                      부동산
                    </option>
                    <option value="family" className="bg-primary">
                      가사/이혼
                    </option>
                    <option value="labor" className="bg-primary">
                      노동/행정
                    </option>
                    <option value="other" className="bg-primary">
                      기타
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/30 text-[11px] tracking-widest uppercase mb-3">
                  상담 내용 <span className="text-accent">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="상담하고 싶은 내용을 간략히 작성해주세요."
                  className="w-full bg-transparent border-b border-white/10 text-white text-[14px] pb-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/10 resize-none font-light"
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-0.5 accent-accent"
                />
                <label
                  htmlFor="privacy"
                  className="text-white/20 text-[11px] leading-relaxed font-light"
                >
                  개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담
                  목적으로만 사용되며, 상담 완료 후 즉시 파기됩니다.
                </label>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="group relative w-full bg-accent text-primary font-medium py-4 text-[13px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-accent/10"
                >
                  <span className="relative z-10">상담 신청하기</span>
                  <div className="absolute inset-0 bg-accent-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
