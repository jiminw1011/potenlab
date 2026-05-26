import { CheckCircle, MessageSquare, BarChart3, PlusCircle, Link2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { title: string; desc: string; color: "teal" | "orange"; Icon: LucideIcon }[] = [
  { title: "AI Grading Engine", desc: "Grades handwritten and digital work across all subjects in seconds.", color: "teal", Icon: CheckCircle },
  { title: "Instant Personalized Feedback", desc: "Every student gets specific, actionable feedback the moment grading completes.", color: "orange", Icon: MessageSquare },
  { title: "Performance Analytics", desc: "Class and student dashboards surface struggling concepts in real time.", color: "teal", Icon: BarChart3 },
  { title: "Assignment & Quiz Generator", desc: "Build standards-aligned worksheets, quizzes, and rubrics in one click.", color: "orange", Icon: PlusCircle },
  { title: "Google Classroom Integration", desc: "Plug-and-play sync — no new logins, no double-entry.", color: "teal", Icon: Link2 },
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
                      <f.Icon className={`w-5 h-5 ${f.color === "teal" ? "text-edu-teal" : "text-edu-orange"}`} />
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
