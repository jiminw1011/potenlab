"use client";

import { useState } from "react";

const tabs = [
  {
    id: "goal1",
    num: "Goal 01",
    title: "Save Teachers\nTime",
    titleShort: "Save Teachers Time",
    desc: "Up to 10 hours back per teacher per week — freeing them to focus on teaching, not paperwork.",
    features: ["AI Grading Engine", "Assignment Generator"],
    color: "teal",
    borderClass: "border-edu-teal",
    ringClass: "ring-edu-teal shadow-edu-teal/20",
    textClass: "text-edu-teal",
    stat: "10",
    statLabel: "hours saved per teacher per week.",
    statHighlight: "That's 500+ hours per year.",
    details: [
      { title: "AI Grading Engine", desc: "Automatically grades handwritten and digital assignments across every subject in minutes — aligned to your rubric or one it generates for you. Teachers review, not grade." },
      { title: "Assignment & Quiz Generator", desc: "Describe the topic and grade level — EduEducator builds standards-aligned worksheets, quizzes, and rubrics in one click. What used to take an hour takes seconds." },
    ],
    placeholders: ["AI Grading Engine UI", "Quiz Generator UI"],
  },
  {
    id: "goal2",
    num: "Goal 02",
    title: "Improve Student\nScores",
    titleShort: "Improve Student Scores",
    desc: "Instant personalized feedback on every question so every student knows exactly what to fix.",
    features: ["Instant Personalized Feedback"],
    color: "orange",
    borderClass: "border-edu-orange",
    ringClass: "ring-edu-orange shadow-edu-orange/20",
    textClass: "text-edu-orange",
    stat: "100%",
    statLabel: "of students get personalized feedback —",
    statHighlight: "not just the ones who raise their hand.",
    details: [
      { title: "Instant Personalized Feedback", desc: 'Every student receives specific, actionable feedback on every question — the moment grading completes. Not "good job" — specific guidance like: "Check your use of the quadratic formula in step 3."' },
      { title: "Grades Students Can Actually Act On", desc: "When students understand exactly where they went wrong and why, they can self-correct before the next class. EduEducator turns every graded assignment into a personalized study guide." },
    ],
    placeholders: ["Personalized Feedback UI", "Student Study Guide UI"],
  },
  {
    id: "goal3",
    num: "Goal 03",
    title: "Direct Smarter\nInstruction",
    titleShort: "Smarter Instruction",
    desc: "Analytics that surface struggling concepts and drive targeted classroom decisions — automatically.",
    features: ["Performance Analytics", "Concept Flagging"],
    color: "green",
    borderClass: "border-green-400",
    ringClass: "ring-green-400 shadow-green-400/20",
    textClass: "text-green-400",
    stat: "",
    statLabel: "See exactly which concepts to address before the next lesson —",
    statHighlight: "automatically.",
    details: [
      { title: "Automatic Concept Flagging", desc: "After every assignment, EduEducator identifies which topics had the highest error rates across the class and teachers can access that information at anytime on our analytics page." },
      { title: "Class & Student Performance Dashboards", desc: "Real-time dashboards give teachers a clear view of class-wide trends and individual student progress over time — so instructional decisions are data-driven, targeted, and measurable across the entire semester." },
    ],
    placeholders: ["Analytics Dashboard UI", "Performance Dashboard UI"],
  },
];

export default function EduSolutions() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-edu-teal font-semibold text-sm tracking-wide uppercase mb-4">The Solution</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-edu-navy leading-tight mb-4">Introducing EduEducator</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Everything EduEducator does flows from three district goals:</p>
        </div>

        {/* Mobile tab bar */}
        <div className="grid grid-cols-3 gap-3 mb-0 md:hidden reveal">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={`border-t-4 ${tab.borderClass} rounded-xl px-4 py-5 text-center transition-all duration-300 ${
                active === i
                  ? `bg-edu-navy ring-2 ${tab.ringClass} shadow-lg`
                  : "bg-gray-100"
              }`}
            >
              <p className={`${tab.textClass} font-semibold text-[10px] tracking-widest uppercase mb-1`}>{tab.num}</p>
              <h3 className={`text-sm font-extrabold leading-tight ${active === i ? "text-white" : "text-edu-navy"}`}>
                {tab.titleShort}
              </h3>
            </button>
          ))}
        </div>

        {/* Desktop tab cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-0 reveal">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={`border-t-4 ${tab.borderClass} rounded-xl p-8 text-left transition-all duration-300 ${
                active === i
                  ? `bg-edu-navy ring-2 ${tab.ringClass} shadow-lg scale-[1.02]`
                  : "bg-gray-100"
              }`}
            >
              <p className={`${tab.textClass} font-semibold text-xs tracking-widest uppercase mb-3`}>{tab.num}</p>
              <h3 className={`text-2xl font-extrabold mb-4 whitespace-pre-line ${active === i ? "text-white" : "text-edu-navy"}`}>
                {tab.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${active === i ? "text-gray-300" : "text-gray-500"}`}>{tab.desc}</p>
              <div className="space-y-2">
                {tab.features.map((f) => (
                  <p key={f} className={`${tab.textClass} text-sm font-medium`}>&rarr; {f}</p>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Detail Panel */}
        <div className="mt-10 reveal">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200" key={current.id}>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-10 flex flex-col">
                <div className="bg-edu-navy rounded-xl p-8 flex flex-col items-center justify-center mb-8">
                  {current.stat ? (
                    <p className={`text-5xl lg:text-7xl font-extrabold ${current.textClass} mb-2`}>{current.stat}</p>
                  ) : (
                    <p className={`text-3xl lg:text-4xl font-extrabold ${current.textClass} text-center leading-tight`}>
                      Know Before<br />You Teach.
                    </p>
                  )}
                  <p className="text-gray-400 text-center text-sm leading-relaxed mt-2">
                    {current.statLabel}<br />
                    <span className={`${current.textClass} font-semibold`}>{current.statHighlight}</span>
                  </p>
                </div>
                <div className="space-y-6 flex-1">
                  {current.details.map((d) => (
                    <div key={d.title} className={`border-l-4 ${current.borderClass} pl-6`}>
                      <h4 className="font-bold text-edu-navy text-lg mb-2">{d.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 lg:p-10 bg-gray-100 flex flex-col gap-6">
                {current.placeholders.map((ph) => (
                  <div key={ph} className="bg-gray-200 w-full flex-1 min-h-[200px] rounded-lg flex items-center justify-center text-gray-500 text-sm">
                    {ph}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
