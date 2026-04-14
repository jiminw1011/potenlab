const cards = [
  { title: "Zero Model Training on Student Data", desc: "Student submissions, grades, and performance data are used solely to power your school's grading and feedback. They are never shared with third parties or used to improve AI models.", borderColor: "border-edu-teal", iconColor: "text-edu-teal", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { title: "FERPA Compliant", desc: "EduEducator is fully compliant with FERPA. Student educational records are protected, access is restricted to authorized users, and your district retains full data ownership.", borderColor: "border-edu-sky", iconColor: "text-edu-sky", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { title: "Encrypted & Secure", desc: "All data is encrypted in transit and at rest. Access controls and audit logs are in place.", borderColor: "border-edu-orange", iconColor: "text-edu-orange", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "Data Stays With Your District", desc: "You own your data. EduEducator does not sell, rent, or monetize student or teacher information. Districts can request full data deletion at any time.", borderColor: "border-purple-400", iconColor: "text-purple-400", icon: "M5 13l4 4L19 7" },
];

export default function EduSecurity() {
  return (
    <section id="security" className="bg-edu-navy py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <div className="reveal">
            <p className="text-edu-teal font-semibold text-sm tracking-wide uppercase mb-4">Data Security &amp; Privacy</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Student Data Is Safe.<br />Full Stop.
            </h2>
          </div>
          <div className="w-24 h-24 lg:w-32 lg:h-32 shrink-0 float-anim reveal">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5L10 25v30c0 22 17 38 40 42 23-4 40-20 40-42V25L50 5z" fill="#00BFA5" opacity="0.3" />
              <path d="M50 15L20 30v25c0 18 13 30 30 33 17-3 30-15 30-33V30L50 15z" fill="#00BFA5" opacity="0.5" />
              <path d="M45 55l-10-10 4-4 6 6 16-16 4 4L45 55z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="bg-green-600/20 border border-green-500/40 rounded-xl p-5 mb-10 reveal">
          <p className="text-edu-teal font-bold text-center text-lg">We never use student data to train AI models. Ever.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`bg-edu-navy-light rounded-xl p-6 border-l-4 ${card.borderColor} transition-all hover:translate-y-[-4px] hover:shadow-lg reveal reveal-delay-${i + 1}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <svg className={`w-6 h-6 ${card.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                </svg>
                <h4 className="font-bold text-white">{card.title}</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
