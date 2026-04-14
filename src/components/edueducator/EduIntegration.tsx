const stakeholders = [
  { title: "Teachers", desc: "Assignments auto-sync. Grades flow back automatically. Zero double-entry.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { title: "Students", desc: "Submit from Google Classroom and receive feedback in the same familiar interface.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
  { title: "Admins", desc: "School- and district-level dashboards built on existing Google data.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { title: "IT Teams", desc: "Google OAuth — no new logins or complex provisioning required.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
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
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                    </svg>
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
