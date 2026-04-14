const impacts = [
  { value: "10 hrs", desc: "Saved per teacher\nper week", borderColor: "border-edu-orange", textColor: "text-edu-orange" },
  { value: "100%", desc: "Of students get\npersonalized feedback", borderColor: "border-edu-teal", textColor: "text-edu-teal" },
  { value: "Real-time", desc: "Concept flagging\ndirects instruction", borderColor: "border-green-400", textColor: "text-green-400" },
  { value: "\u2191 Scores", desc: "Targeted feedback proven\nto drive improvement", borderColor: "border-purple-400", textColor: "text-purple-400" },
];

export default function EduImpact() {
  return (
    <section className="bg-edu-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <p className="text-edu-teal font-semibold text-sm tracking-wide uppercase mb-4">The Impact</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">What EduEducator Delivers for Your District</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {impacts.map((item, i) => (
            <div
              key={item.value}
              className={`bg-edu-navy-light rounded-xl p-6 text-center border-t-4 ${item.borderColor} stat-pop reveal-delay-${i + 1}`}
            >
              <p className={`text-3xl lg:text-4xl font-extrabold ${item.textColor} mb-2`}>{item.value}</p>
              <p className="text-gray-400 text-xs sm:text-sm whitespace-pre-line">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-edu-teal font-semibold text-sm reveal">
          Less burnout. Better outcomes. A district that retains great teachers.
        </p>
      </div>
    </section>
  );
}
