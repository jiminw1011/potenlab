import { BookOpen } from "lucide-react";

export default function EduFooter() {
  return (
    <footer className="bg-edu-navy-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-edu-teal rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold">EduEducator</span>
          </a>

          <div className="text-gray-500 text-xs sm:text-sm leading-relaxed space-y-1">
            <p>EduEducator Inc. | CEO: John Doe</p>
            <p>Business Registration No. 000-00-00000</p>
            <p>Address: 123 Education Ave, San Francisco, CA 94105, USA</p>
            <p>
              Email:{" "}
              <a href="mailto:info@edueducator.com" className="text-gray-400 hover:text-white transition-colors underline">
                info@edueducator.com
              </a>
            </p>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-gray-600 text-xs">&copy; 2026 EduEducator Inc. All rights reserved.</p>
            <div className="flex items-center gap-4 text-gray-500 text-xs">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
