
import React, { useState, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { BookOpen, Users, ArrowRight, X, GraduationCap } from 'lucide-react';
import { CREATORS, COHORT_OWNERS, PDF_PATH } from './constants';

// --- Components ---

const ManualPage = () => {
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden h-full w-full">
       {!pdfOpen ? (
         <div className="text-center z-10 animate-fade-in max-w-2xl w-full flex flex-col items-center">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl flex items-center justify-center mb-10 border border-white/20 ring-4 ring-white/5">
                <BookOpen size={48} className="text-white drop-shadow-lg" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter drop-shadow-lg text-center leading-tight">
              FSD LAB <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">MANUAL</span>
            </h1>
            
            <div className="h-1 w-24 bg-white/30 rounded-full mb-8"></div>
            
            <p className="text-blue-50 text-xl mb-12 font-medium tracking-wide uppercase opacity-90">
              Department of Computer Science & Engineering
            </p>
            
            <button 
              onClick={() => setPdfOpen(true)}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-blue-900 transition-all duration-300 bg-white rounded-full hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.7)] focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl cursor-pointer"
            >
              <span>Open Lab Manual</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
       ) : (
         <div className="w-full h-full flex flex-col animate-in fade-in duration-500">
            <div className="flex-1 bg-white rounded-2xl shadow-2xl overflow-hidden relative">
                <iframe 
                    src={`${PDF_PATH}#toolbar=0&navpanes=0`} 
                    className="w-full h-full border-none"
                    title="FSD Lab Manual"
                >
                    <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-4">
                        <p>PDF Viewer is not supported directly.</p>
                        <a href={PDF_PATH} target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold">
                            Download PDF
                        </a>
                    </div>
                </iframe>
                
                {/* Floating Close Button */}
                <button 
                    onClick={() => setPdfOpen(false)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110 shadow-lg z-50 cursor-pointer"
                    title="Close Viewer"
                >
                    <X size={24} />
                </button>
            </div>
         </div>
       )}
    </div>
  );
};

const CreatorsPage = () => (
    <div className="flex-1 overflow-y-auto custom-scrollbar w-full">
        <div className="max-w-7xl mx-auto p-6 md:p-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-md tracking-tight">THE CREATORS</h1>
                <div className="h-1 w-20 bg-white/30 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-20">
                {CREATORS.map((creator, idx) => (
                    <div 
                        key={creator.id} 
                        className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-4 shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-500 flex flex-col"
                        style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        <div className="relative aspect-square rounded-3xl overflow-hidden mb-5 bg-gradient-to-br from-white/5 to-white/10 shadow-inner">
                            <img 
                                src={creator.image} 
                                alt={creator.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:contrast-110"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-center mt-auto pb-2">
                            <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wider leading-tight drop-shadow-sm">
                                {creator.name}
                            </h3>
                            <div className="inline-block px-4 py-1 bg-black/20 rounded-full backdrop-blur-sm border border-white/10">
                                <p className="text-sm font-mono font-bold text-blue-200 tracking-widest">
                                    {creator.usn}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const CohortOwnersPage = () => (
    <div className="flex-1 overflow-y-auto custom-scrollbar w-full flex flex-col items-center justify-center min-h-full">
        <div className="max-w-6xl mx-auto p-6 md:p-12 w-full">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-md tracking-tight">COHORT OWNERS</h1>
                <div className="h-1 w-20 bg-white/30 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-center max-w-4xl mx-auto">
                {COHORT_OWNERS.map((owner, idx) => (
                    <div 
                        key={owner.id} 
                        className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-8 shadow-2xl hover:shadow-white/10 hover:bg-white/20 transition-all duration-500 flex flex-col items-center text-center"
                        style={{ animationDelay: `${idx * 200}ms` }}
                    >
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 bg-gradient-to-br from-white/5 to-white/10 shadow-2xl ring-4 ring-white/10 group-hover:ring-white/30 transition-all duration-500">
                            <img 
                                src={owner.image} 
                                alt={owner.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter group-hover:contrast-105"
                                loading="lazy"
                            />
                        </div>
                        <div className="mt-auto">
                            <h3 className="text-2xl font-black text-white mb-3 tracking-wide drop-shadow-sm">
                                {owner.name}
                            </h3>
                            <p className="text-blue-200 font-semibold text-lg mb-2">{owner.designation}</p>
                            <p className="text-white/70 text-sm font-medium max-w-xs mx-auto leading-relaxed">
                                {owner.department}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Navigation = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="h-auto md:h-24 py-4 md:py-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8 z-50 w-full gap-4 md:gap-0">
            <div className="hidden md:flex items-center space-x-4">
                <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md border border-white/10 shadow-lg">
                <BookOpen className="text-blue-200 w-6 h-6" />
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-black text-xl tracking-tight leading-none">FSD</span>
                    <span className="text-blue-200 text-xs font-bold tracking-[0.2em] uppercase">Manual</span>
                </div>
            </div>

            <div className="flex bg-black/20 backdrop-blur-xl rounded-full p-1.5 border border-white/10 shadow-2xl overflow-x-auto max-w-full">
                <Link 
                to="/"
                className={`relative px-6 md:px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 overflow-hidden whitespace-nowrap no-underline flex items-center ${
                    currentPath === '/' 
                    ? 'bg-white text-slate-900 shadow-lg scale-105' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                >
                Manual
                </Link>
                <Link 
                to="/creators"
                className={`relative px-6 md:px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center overflow-hidden whitespace-nowrap no-underline ${
                    currentPath === '/creators' 
                    ? 'bg-white text-slate-900 shadow-lg scale-105' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                >
                <Users size={16} className="mr-2" />
                Creators
                </Link>
                <Link 
                to="/cohort-owners"
                className={`relative px-6 md:px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center overflow-hidden whitespace-nowrap no-underline ${
                    currentPath === '/cohort-owners' 
                    ? 'bg-white text-slate-900 shadow-lg scale-105' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                >
                <GraduationCap size={16} className="mr-2" />
                Owners
                </Link>
            </div>
            
            <div className="hidden md:block w-32"></div> {/* Spacer for centering nav */}
        </nav>
    );
};

export default function App() {
  return (
    <Router>
        <div className="h-screen w-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 flex flex-col overflow-hidden text-gray-900 font-sans selection:bg-blue-500 selection:text-white">
        
            <Navigation />

            {/* Main View Area */}
            <main className="flex-1 flex relative w-full overflow-hidden">
                <Routes>
                    <Route path="/" element={<ManualPage />} />
                    <Route path="/creators" element={<CreatorsPage />} />
                    <Route path="/cohort-owners" element={<CohortOwnersPage />} />
                </Routes>
            </main>
        </div>
    </Router>
  );
}
