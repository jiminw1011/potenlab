const steps = [
  "Pilot with one school or grade level",
  "Measure time saved and student outcomes",
  "Roll out district-wide with full support",
];

export default function EduCTA() {
  return (
    <section id="cta" className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a7e9e 0%, #0F203C 50%, #162d52 100%)" }}>
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <div className="absolute right-[-200px] top-[-200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,191,165,0.15)_0%,transparent_70%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="max-w-2xl">
          <p className="text-edu-teal font-semibold text-sm tracking-wide uppercase mb-4 reveal">Let&apos;s Partner</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 reveal reveal-delay-1">
            Start with a<br />Pilot Program.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 reveal reveal-delay-2">
            We make it easy for districts to start small, see results, and scale — with a
            dedicated specialist and full onboarding support from day one.
          </p>

          <div className="space-y-4 mb-10 reveal reveal-delay-3">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-edu-navy rounded-full flex items-center justify-center text-edu-teal font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <p className="text-white font-medium">{step}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-4">
            <a href="mailto:demo@edueducator.com" className="bg-edu-orange hover:bg-edu-orange-light text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors text-center shadow-lg shadow-edu-orange/30">
              Schedule a Demo Today
            </a>
            <a href="mailto:info@edueducator.com" className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl text-lg transition-all text-center">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
