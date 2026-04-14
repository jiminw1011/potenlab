const steps = [
  { num: "01", title: "Dedicated Onboarding Specialist", desc: "A real person — not a chatbot — is assigned to your account from day one. They coordinate your entire rollout and are your single point of contact.", borderColor: "border-edu-teal", bgColor: "bg-edu-teal" },
  { num: "02", title: "Live Training & Tutorial Session", desc: "Videos and live walkthroughs covering every feature: grading, feedback, analytics, and assignment generation. Recorded for future staff.", borderColor: "border-edu-sky", bgColor: "bg-edu-sky" },
  { num: "03", title: "Guided Setup & Configuration", desc: "We configure EduEducator to match your district's grading standards, subject areas, and existing environment — before teachers ever log in.", borderColor: "border-edu-orange", bgColor: "bg-edu-orange" },
  { num: "04", title: "Ongoing Support After Launch", desc: "After go-live, your specialist checks in regularly during the first term. Plus unlimited access to our support team via email and live chat — always included.", borderColor: "border-purple-500", bgColor: "bg-purple-500" },
];

export default function EduSupport() {
  return (
    <section id="support" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-edu-orange font-semibold text-sm tracking-wide uppercase mb-4">Implementation &amp; Support</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-edu-navy leading-tight mb-4">
            We Handle Everything — So Your<br />Team Doesn&apos;t Have To.
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Every school and district gets a dedicated onboarding specialist who personally guides
            your team through setup, training, and launch — at no extra cost.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`bg-white rounded-xl p-8 border-l-4 ${step.borderColor} shadow-sm transition-all hover:translate-y-[-4px] hover:shadow-lg reveal reveal-delay-${i + 1}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 ${step.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {step.num}
                </div>
                <h4 className="font-bold text-edu-navy text-lg">{step.title}</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
