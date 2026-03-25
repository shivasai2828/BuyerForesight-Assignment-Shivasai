import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location.state?.user) {
      setUser(location.state.user);
      setLoading(false);
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id, location.state]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-pulse">
        <div className="w-12 h-12 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin mb-4"></div>
        <p className="text-slate-500 font-medium tracking-wide">Loading details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-red-50 border border-red-100 rounded-2xl shadow-sm text-center">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Error</h3>
        <p className="text-red-600 mb-4">{error}</p>
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium">← Back to Dashboard</Link>
      </div>
    );
  }

  if (!user) {
    return <div className="text-center py-10 font-medium text-slate-500">User not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-4 fade-in">
      <Link
        to="/"
        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors mb-6 group bg-white/50 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-200/60 shadow-sm"
      >
        <svg className="mr-2 h-4 w-4 text-slate-400 group-hover:text-indigo-600 transition-colors group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Dashboard
      </Link>
      
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-90"></div>
        
        <div className="px-6 sm:px-10 pt-16 pb-8 relative z-10 flex flex-col sm:flex-row items-center sm:items-end gap-6">
          <div className="w-28 h-28 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden flex-shrink-0 relative">
            <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-800 text-4xl font-bold flex items-center justify-center">
              {user.name.charAt(0)}
            </div>
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-400 border-4 border-white rounded-full"></div>
          </div>
          <div className="text-center sm:text-left flex-1 mb-2">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{user.name}</h2>
            <p className="text-lg text-slate-500 font-medium mt-1">@{user.username}</p>
          </div>
        </div>

        <div className="border-t border-slate-100 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            <div className="p-6 sm:p-10 space-y-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Contact Details</h3>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-900">{user.email}</p>
                  <p className="text-xs text-slate-500">Email Address</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-900">{user.phone}</p>
                  <p className="text-xs text-slate-500">Phone</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </div>
                </div>
                <div className="ml-4">
                  <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:underline">{user.website}</a>
                  <p className="text-xs text-slate-500">Website</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-900">
                    {user.address.street}, {user.address.suite}<br/>
                    {user.address.city}, {user.address.zipcode}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Address</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-10 bg-white">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">Company Information</h3>
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-50 rounded-full blur-2xl -ml-8 -mb-8"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-md">
                      {user.company.name.charAt(0)}
                    </div>
                    <h4 className="ml-3 text-lg font-bold text-slate-900">{user.company.name}</h4>
                  </div>
                  
                  <blockquote className="border-l-4 border-indigo-400 pl-4 py-1 italic text-slate-700 bg-white/60 p-3 rounded-r-lg shadow-sm border border-slate-100 border-l-indigo-400 mb-4">
                    "{user.company.catchPhrase}"
                  </blockquote>
                  
                  <div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {user.company.bs}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
