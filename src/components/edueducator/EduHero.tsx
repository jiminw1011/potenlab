export default function EduHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center pt-20"
      style={{ background: "linear-gradient(135deg, #0F203C 0%, #162d52 50%, #1a3a6a 100%)" }}
    >
      <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,191,165,0.25)_0%,rgba(0,191,165,0.05)_70%,transparent_100%)]" />
      <div className="absolute right-[-50px] top-[-50px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,191,165,0.15)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-edu-teal font-semibold text-sm sm:text-base tracking-wide uppercase mb-4 reveal">
            Transforming K-12 &amp; Higher Education
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 reveal reveal-delay-1">
            Give Teachers Their<br />Time Back.
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto reveal reveal-delay-2">
            AI-powered grading and feedback that saves teachers up to 10 hours a week
            — so they can focus on what matters most: students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal reveal-delay-3">
            <a href="#cta" className="bg-edu-orange hover:bg-edu-orange-light text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors text-center shadow-lg shadow-edu-orange/30">
              Schedule a Demo
            </a>
            <a href="#mission" className="border-2 border-edu-teal text-edu-teal hover:bg-edu-teal hover:text-white font-bold px-8 py-4 rounded-xl text-lg transition-all text-center">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-edu-teal via-edu-teal-light to-edu-teal" />
    </section>
  );
}
