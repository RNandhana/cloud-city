import React from 'react';
import { DollarSign, Zap, ShieldCheck, Gauge } from 'lucide-react';

export default function LiveMetricsBar({ score, isCompact = false }) {
  const { totalCost, performance, reliability, scalability } = score;

  const getPerfColor = (val) => {
    if (val >= 80) return 'from-emerald-400 to-teal-400';
    if (val >= 60) return 'from-sky-400 to-blue-500';
    return 'from-amber-400 to-rose-500';
  };

  const getRelColor = (val) => {
    if (val >= 80) return 'from-emerald-400 to-cyan-400';
    if (val >= 60) return 'from-sky-400 to-indigo-500';
    return 'from-amber-400 to-rose-500';
  };

  if (isCompact) {
    return (
      <div className="glass-panel px-4 py-2.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs sm:text-sm">
        <div className="flex items-center space-x-1.5 font-mono text-emerald-400 font-bold">
          <span>₹{totalCost.toLocaleString('en-IN')}</span>
          <span className="text-[10px] text-slate-400 font-sans font-normal">/mo</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="text-[11px] text-slate-400">Perf:</span>
            <span className="font-bold text-sky-400 font-mono">{performance}%</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-[11px] text-slate-400">Rel:</span>
            <span className="font-bold text-indigo-400 font-mono">{reliability}%</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800/90 shadow-xl">
      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
        <span className="flex items-center space-x-1.5">
          <Gauge className="w-4 h-4 text-sky-400" />
          <span>Real-Time Cloud Vitals</span>
        </span>
        <span className="text-[11px] text-slate-500 font-mono">Dynamic Evaluation</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Cost Card */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 relative overflow-hidden">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center space-x-1">
              <span>💰</span>
              <span>ESTIMATED COST</span>
            </span>
          </div>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl sm:text-3xl font-black text-white font-mono">
              ₹{totalCost.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-slate-400 font-medium">/ month</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-emerald-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, (totalCost / 12000) * 100)}%` }}
            />
          </div>
        </div>

        {/* Performance Card */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 relative overflow-hidden">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center space-x-1">
              <span>⚡</span>
              <span>PERFORMANCE</span>
            </span>
            <span className="text-xs font-mono font-bold text-sky-400">{performance}%</span>
          </div>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl sm:text-3xl font-black text-white font-mono">
              {performance}%
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {performance >= 80 ? 'Fast' : performance >= 55 ? 'Moderate' : 'Constrained'}
            </span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className={`bg-gradient-to-r ${getPerfColor(performance)} h-full rounded-full transition-all duration-500`}
              style={{ width: `${performance}%` }}
            />
          </div>
        </div>

        {/* Reliability Card */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 relative overflow-hidden">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center space-x-1">
              <span>🟢</span>
              <span>RELIABILITY</span>
            </span>
            <span className="text-xs font-mono font-bold text-indigo-400">{reliability}%</span>
          </div>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl sm:text-3xl font-black text-white font-mono">
              {reliability}%
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {reliability >= 85 ? 'High Uptime' : reliability >= 60 ? 'Standard' : 'At Risk'}
            </span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className={`bg-gradient-to-r ${getRelColor(reliability)} h-full rounded-full transition-all duration-500`}
              style={{ width: `${reliability}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
