import React from 'react';
import { Cloud, Heart, BookOpen, ShieldCheck, Github } from 'lucide-react';

export default function Footer({ onOpenDocs, onNavigate }) {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-navy-950/90 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800/60">
          
          {/* Col 1: Brand & About statement */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-400/30">
                <Cloud className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                CLOUD CITY
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              "Cloud City is an interactive learning activity designed for Cloud & DevOps Essentials."
            </p>
          </div>

          {/* Col 2: Developed By - specifically R NANDHANA(689), AVINASH J(695) */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block">
              Developed By
            </span>
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-2">
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>R NANDHANA (689)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>AVINASH J (695)</span>
              </div>
              <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                Cloud & DevOps Essentials Laboratory Project
              </p>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              Quick Resources
            </span>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigate('landing')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Simulation Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('scenario')}
                  className="hover:text-sky-400 transition-colors"
                >
                  QuickCart Architecture Case
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenDocs}
                  className="hover:text-sky-400 transition-colors flex items-center space-x-1"
                >
                  <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                  <span>Activity Documentation</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Cloud City. Engineered for Cloud & DevOps classroom learning.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Deployable on Vercel</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">100% Client-Side Simulation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
