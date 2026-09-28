import React from 'react';
import { 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Target, 
  ArrowRight, 
  DollarSign, 
  ShieldCheck, 
  Zap,
  Sparkles
} from 'lucide-react';

export default function ScenarioCard({ studentName, onStartDesigning }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fadeIn">
      
      {/* Container with glowing border */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-sky-500/30 shadow-2xl shadow-sky-500/10 relative overflow-hidden">
        
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Architect badge */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Mission Briefing</span>
          </div>
          {studentName && (
            <div className="text-xs text-slate-400">
              Lead Architect: <span className="text-white font-bold">{studentName}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="flex items-center space-x-4 mb-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-0.5 shadow-lg shadow-orange-500/20">
            <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center">
              <span className="text-2xl">🛒</span>
            </div>
          </div>
          <div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              QUICKCART
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-amber-400 uppercase tracking-wider">
              E-Commerce Cloud Architecture Case Study
            </p>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-slate-200 font-medium mb-8">
          "QuickCart is a growing online shopping application."
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
          
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Current Users</p>
              <p className="text-2xl sm:text-3xl font-black text-white">10,000 users</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Normal daily shopping baseline</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">Expected Growth</p>
              <p className="text-2xl sm:text-3xl font-black text-amber-300">50,000 users</p>
              <p className="text-[11px] text-slate-400 mt-0.5">During upcoming flash sale & festive surges</p>
            </div>
          </div>

        </div>

        {/* Goal Card */}
        <div className="p-5 rounded-2xl bg-sky-950/40 border border-sky-500/30 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-300 mb-1">
                Your Primary Mission Goal
              </h3>
              <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                "Build a cloud infrastructure that can handle growth while keeping cost under control."
              </p>
              <p className="text-xs text-slate-300 mt-2">
                Make strategic decisions across <strong>Compute</strong>, <strong>Storage</strong>, <strong>Networking</strong>, and <strong>Monitoring</strong>. If your infrastructure is under-provisioned, the site will crash during flash sales. If it's over-provisioned, you'll burn excess cash!
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-800">
          <div className="flex items-center space-x-4 text-xs text-slate-400">
            <span className="flex items-center space-x-1">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cost Balance</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Zap className="w-3.5 h-3.5 text-sky-400" />
              <span>Speed</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>Reliability</span>
            </span>
          </div>

          <button
            onClick={onStartDesigning}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-navy-950 font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center space-x-3 group"
          >
            <span>START DESIGNING</span>
            <ArrowRight className="w-4 h-4 text-navy-950 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
}
