import React from 'react';
import { Cloud, BookOpen, Layers, User, RotateCcw } from 'lucide-react';

export default function Navbar({ 
  studentName, 
  onOpenNameModal, 
  onNavigate, 
  currentView,
  onOpenDocs,
  onReset 
}) {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <button 
          onClick={() => onNavigate('landing')}
          className="flex items-center space-x-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-sky-500 to-cyan-400 p-0.5 shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-300">
            <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
              <Cloud className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent">
                CLOUD CITY
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                v2.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 -mt-0.5 font-medium">Build Your Own Cloud</p>
          </div>
        </button>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
          <button
            onClick={() => onNavigate('landing')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              currentView === 'landing'
                ? 'text-sky-400 bg-sky-500/10 font-semibold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => onNavigate('builder')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1.5 ${
              currentView === 'builder' || currentView === 'results' || currentView === 'scenario'
                ? 'text-sky-400 bg-sky-500/10 font-semibold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Build Cloud</span>
          </button>

          <button
            onClick={() => {
              onNavigate('landing');
              setTimeout(() => {
                const el = document.getElementById('how-it-works-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
          >
            How It Works
          </button>

          <button
            onClick={onOpenDocs}
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center space-x-1.5"
          >
            <BookOpen className="w-4 h-4 text-sky-400" />
            <span>Documentation</span>
          </button>
        </nav>

        {/* User Profile / Action Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenNameModal}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-xs sm:text-sm text-slate-200 hover:text-white transition-all shadow-sm"
            title="Edit student name"
          >
            <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
              <User className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium max-w-[120px] truncate">
              {studentName || 'Set Student Name'}
            </span>
          </button>

          {currentView !== 'landing' && (
            <button
              onClick={onReset}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 border border-slate-700/60 hover:border-rose-500/40 text-xs transition-colors"
              title="Reset selections"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}

          {currentView === 'landing' && (
            <button
              onClick={() => onNavigate('scenario')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-navy-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Build Cloud
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
