import { Lock, ShieldCheck, ShieldAlert, CircleCheckBig } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const cards: { title: string; desc: string; borderColor: string; iconColor: string; Icon: LucideIcon }[] = [
  { title: "Zero Model Training on Student Data", desc: "Student submissions, grades, and performance data are used solely to power your school's grading and feedback. They are never shared with third parties or used to improve AI models.", borderColor: "border-edu-teal", iconColor: "text-edu-teal", Icon: Lock },
  { title: "FERPA Compliant", desc: "EduEducator is fully compliant with FERPA. Student educational records are protected, access is restricted to authorized users, and your district retains full data ownership.", borderColor: "border-edu-sky", iconColor: "text-edu-sky", Icon: ShieldCheck },
  { title: "Encrypted & Secure", desc: "All data is encrypted in transit and at rest. Access controls and audit logs are in place.", borderColor: "border-edu-orange", iconColor: "text-edu-orange", Icon: ShieldAlert },
  { title: "Data Stays With Your District", desc: "You own your data. EduEducator does not sell, rent, or monetize student or teacher information. Districts can request full data deletion at any time.", borderColor: "border-purple-400", iconColor: "text-purple-400", Icon: CircleCheckBig },
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
                <card.Icon className={`w-6 h-6 ${card.iconColor}`} />
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
