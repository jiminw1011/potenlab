export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-500 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-accent/40 flex items-center justify-center">
                <span className="font-serif text-accent text-lg italic">J</span>
              </div>
              <div>
                <span className="text-white text-[14px] font-medium tracking-[0.15em]">
                  법무법인 정의
                </span>
              </div>
            </div>
            <p className="text-[13px] leading-[1.9] font-light max-w-xs text-gray-500">
              신뢰와 전문성으로 의뢰인의 권리를 지키는 법무법인 정의입니다.
              복잡한 법률 문제, 저희가 함께하겠습니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-6">
              바로가기
            </h4>
            <ul className="space-y-3">
              {[
                { label: "법인 소개", href: "#about" },
                { label: "업무분야", href: "#practice" },
                { label: "구성원 소개", href: "#team" },
                { label: "상담 문의", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-accent text-[13px] tracking-wide transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-6">
              연락처
            </h4>
            <ul className="space-y-3 text-[13px] font-light">
              <li>서울특별시 서초구 서초대로 250</li>
              <li>법조빌딩 12층</li>
              <li className="pt-2">대표전화 02-1234-5678</li>
              <li>팩스 02-1234-5679</li>
              <li className="pt-2">contact@justice-law.co.kr</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] tracking-wider text-gray-600">
          <p>&copy; 2025 법무법인 정의. All rights reserved.</p>
          <div className="flex gap-8">
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300"
            >
              개인정보처리방침
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300"
            >
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
