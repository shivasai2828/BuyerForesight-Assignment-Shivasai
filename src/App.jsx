import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserDetail from "./pages/UserDetail";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 relative">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200">
              BF
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 tracking-tight">
              BuyerForesight
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              User Directory
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-1.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-full shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              Developed by
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500 relative z-10">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Developer Info Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-100">
            <div className="relative h-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 rounded-full p-1.5 transition-colors backdrop-blur-sm"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-6 pb-8 pt-0 relative">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg mx-auto -mt-12 flex items-center justify-center overflow-hidden mb-5 relative z-10">
                <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700 font-bold text-3xl flex items-center justify-center">
                  SB
                </div>
              </div>

              <div className="text-center space-y-1 mb-8">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Shivasai Boddu
                </h3>
                <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
                  Frontend Developer
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-indigo-50/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-medium text-slate-500 mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:boddushivasa@gmail.com"
                      className="text-sm font-bold text-slate-800 hover:text-indigo-600 truncate block"
                    >
                      boddushivasa@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-green-50/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+918500548260"
                      className="text-sm font-bold text-slate-800 hover:text-green-600 block"
                    >
                      +91 8500548260
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold shadow-md shadow-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 active:scale-95"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
