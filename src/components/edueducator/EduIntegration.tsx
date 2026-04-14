import { User, Users, Building2, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stakeholders: { title: string; desc: string; Icon: LucideIcon }[] = [
  { title: "Teachers", desc: "Assignments auto-sync. Grades flow back automatically. Zero double-entry.", Icon: User },
  { title: "Students", desc: "Submit from Google Classroom and receive feedback in the same familiar interface.", Icon: Users },
  { title: "Admins", desc: "School- and district-level dashboards built on existing Google data.", Icon: Building2 },
  { title: "IT Teams", desc: "Google OAuth — no new logins or complex provisioning required.", Icon: Settings },
];

export default function EduIntegration() {
  return (
    <section id="integration" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <p className="text-edu-navy font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-6">
              Works Where Teachers Already Work
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-edu-teal rounded-full flex items-center justify-center text-white text-2xl font-bold">G</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-edu-teal">
                Google Classroom<br />Integration
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">
              EduEducator plugs directly into Google Classroom. Teachers can assign, collect, and
              receive graded work without switching platforms.
            </p>
            <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center text-gray-500 text-sm">
              Google Classroom Integration UI
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <h3 className="text-xl font-bold text-edu-navy mb-8">Seamless for Every Stakeholder</h3>
            <div className="space-y-6">
              {stakeholders.map((s) => (
                <div key={s.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-edu-teal rounded-full flex items-center justify-center shrink-0">
                    <s.Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-edu-navy mb-1">{s.title}</h4>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
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
