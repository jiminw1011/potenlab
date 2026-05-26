const stats = [
  { value: "44%", desc: "of teachers report burnout\nas a serious concern" },
  { value: "15+", desc: "hours per week spent\non grading & admin" },
  { value: "55%", desc: "consider leaving the\nprofession within 2 years" },
];

const bars = [
  { label: "Grading & Feedback", pct: "32%", color: "bg-edu-orange", textColor: "text-edu-orange" },
  { label: "Lesson Planning & Admin", pct: "24%", color: "bg-edu-teal", textColor: "text-edu-teal" },
  { label: "Classroom Instruction", pct: "28%", color: "bg-green-400", textColor: "text-green-400" },
  { label: "Communication & Meetings", pct: "16%", color: "bg-purple-400", textColor: "text-purple-400" },
];

export default function EduProblem() {
  return (
    <section id="problem" className="bg-edu-navy py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-edu-teal font-semibold text-sm tracking-wide uppercase mb-4 reveal">
          The Crisis in Our Classrooms
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-12 reveal reveal-delay-1">
          Teacher Burnout Is a<br />District-Wide Emergency.
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((s, i) => (
            <div key={s.value} className={`bg-edu-navy-light border-t-4 border-edu-orange rounded-xl p-8 stat-pop reveal-delay-${i + 1}`}>
              <p className="text-4xl lg:text-5xl font-extrabold text-edu-orange mb-3">{s.value}</p>
              <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-xs reveal">Source: RAND American Teacher Panel, 2023–2024</p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-20 items-center">
          <div className="reveal">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Where Does<br />Teacher Time Go?
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The average teacher spends over half their working hours on non-teaching tasks —
              leaving little time for meaningful student engagement.
            </p>
          </div>
          <div className="space-y-6 reveal reveal-delay-1">
            <h4 className="text-white font-bold text-lg">Average Weekly Time Allocation</h4>
            {bars.map((b) => (
              <div key={b.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 text-sm">{b.label}</span>
                  <span className={`${b.textColor} font-bold text-sm`}>{b.pct}</span>
                </div>
                <div className="w-full bg-edu-navy-light rounded-full h-4 overflow-hidden">
                  <div className={`bar-fill ${b.color} h-full rounded-full`} style={{ "--bar-width": b.pct } as React.CSSProperties} />
                </div>
              </div>
            ))}
            <div className="bg-edu-orange/10 border border-edu-orange/30 rounded-lg p-4 mt-4">
              <p className="text-edu-orange text-sm font-medium">
                Grading alone consumes nearly 1/3 of a teacher&apos;s week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
