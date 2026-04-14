const features = [
  { title: "AI Grading Engine", desc: "Grades handwritten and digital work across all subjects in seconds.", color: "teal", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Instant Personalized Feedback", desc: "Every student gets specific, actionable feedback the moment grading completes.", color: "orange", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
  { title: "Performance Analytics", desc: "Class and student dashboards surface struggling concepts in real time.", color: "teal", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { title: "Assignment & Quiz Generator", desc: "Build standards-aligned worksheets, quizzes, and rubrics in one click.", color: "orange", icon: "M12 6v6m0 0v6m0-6h6m-6 0H6" },
  { title: "Google Classroom Integration", desc: "Plug-and-play sync — no new logins, no double-entry.", color: "teal", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
];

export default function EduMission() {
  return (
    <section id="mission" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <div className="bg-edu-navy rounded-2xl p-8 lg:p-12 reveal">
            <p className="text-edu-teal font-semibold text-sm tracking-wide uppercase mb-4">Our Mission</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Empower teachers.<br />Elevate every student.
            </h2>
            <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
              EduEducator is an AI-powered grading and feedback platform built specifically for K-12
              schools, districts, and tutoring centers. We believe every teacher deserves more time
              to teach — and every student deserves feedback that actually helps them grow.
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            <h3 className="text-xl font-bold text-edu-navy mb-6">What EduEducator Does</h3>
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100 transition-all hover:translate-y-[-4px] hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${f.color === "teal" ? "bg-edu-teal/10" : "bg-edu-orange/10"} rounded-full flex items-center justify-center shrink-0 mt-0.5`}>
                      <svg className={`w-5 h-5 ${f.color === "teal" ? "text-edu-teal" : "text-edu-orange"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-edu-navy mb-1">{f.title}</h4>
                      <p className="text-gray-600 text-sm">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
