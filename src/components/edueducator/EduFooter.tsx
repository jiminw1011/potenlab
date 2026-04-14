export default function EduFooter() {
  return (
    <footer className="bg-edu-navy-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-edu-teal rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-white font-bold">EduEducator</span>
          </a>
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <a href="#hero" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#mission" className="hover:text-gray-300 transition-colors">Mission</a>
            <a href="#solutions" className="hover:text-gray-300 transition-colors">Solutions</a>
            <a href="#cta" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
          <p className="text-gray-600 text-sm">&copy; 2026 EduEducator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
