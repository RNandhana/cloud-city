import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  TrendingUp, 
  DollarSign, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  HardDrive, 
  Network, 
  Activity, 
  Maximize2, 
  ArrowRight,
  Sparkles,
  GitBranch,
  RefreshCw,
  Award,
  Layers
} from 'lucide-react';
import ArchitectureView from './ArchitectureView';

export default function ResultsView({
  passed,
  studentName,
  cloudScore,
  computeId,
  storageIds,
  networkingIds,
  monitoringId,
  onTryAgain,
  onRedesign
}) {
  const { totalCost, performance, reliability, scalability, profile, failureReasons } = cloudScore;

  // Final adjusted metrics on success to reflect resilient performance under spike
  const displayPerf = passed ? Math.max(90, performance) : performance;
  const displayRel = passed ? Math.max(92, reliability) : reliability;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-12 animate-fadeIn">
      
      {/* ================= SUCCESS OR FAILURE BANNER ================= */}
      {passed ? (
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 animate-bounce">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>50,000 Concurrent Shoppers Sustained</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            🟢 CLOUD HANDLED THE TRAFFIC
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-2xl mx-auto mb-8">
            "Your infrastructure successfully handled the traffic spike."
          </p>

          {/* Quick Metrics display */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 py-4 px-6 rounded-2xl bg-navy-950/70 border border-emerald-500/30 max-w-2xl mx-auto">
            <div className="text-center">
              <span className="text-xs uppercase font-bold text-slate-400 block">Performance</span>
              <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">{displayPerf}%</span>
            </div>
            <div className="h-10 w-px bg-slate-800" />
            <div className="text-center">
              <span className="text-xs uppercase font-bold text-slate-400 block">Reliability</span>
              <span className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">{displayRel}%</span>
            </div>
            <div className="h-10 w-px bg-slate-800" />
            <div className="text-center">
              <span className="text-xs uppercase font-bold text-slate-400 block">Monthly Rate</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-mono">₹{totalCost.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-2 border-rose-500/50 shadow-2xl shadow-rose-500/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <XCircle className="w-4 h-4 text-rose-400" />
            <span>Infrastructure Overloaded</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            🔴 CLOUD OVERLOADED
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-2xl mx-auto mb-6">
            "Your infrastructure could not handle the sudden increase in traffic."
          </p>

          {/* Detailed Reason Diagnostics */}
          <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30 max-w-2xl mx-auto text-left mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
              Root Cause Bottleneck Diagnostics:
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {failureReasons.length > 0 ? (
                failureReasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-rose-400 font-bold mt-0.5">•</span>
                    <span>{reason}</span>
                  </li>
                ))
              ) : (
                <li className="flex items-start space-x-2">
                  <span className="text-rose-400 font-bold mt-0.5">•</span>
                  <span>"Your architecture has limited compute capacity and no load balancing."</span>
                </li>
              )}
            </ul>
          </div>

          <button
            onClick={onTryAgain}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-navy-950 font-black text-base sm:text-lg tracking-wider shadow-xl shadow-rose-500/30 hover:scale-[1.02] active:scale-[0.99] transition-all inline-flex items-center space-x-2"
          >
            <RotateCcw className="w-5 h-5" />
            <span>TRY AGAIN</span>
          </button>
        </div>
      )}

      {/* ================= FINAL RESULT DASHBOARD (WHEN PASSED) ================= */}
      {passed && (
        <div className="space-y-12">
          
          {/* Main Dashboard Card */}
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-sky-500/30 shadow-2xl relative overflow-hidden">
            <div className="border-b border-slate-800 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center space-x-3">
                  <span>☁️</span>
                  <span>YOUR CLOUD IS READY</span>
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Validated deployment architecture for QuickCart e-commerce operations
                </p>
              </div>

              {studentName && (
                <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center space-x-2.5">
                  <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Lead Architect</span>
                    <span className="text-sm font-extrabold text-white">{studentName}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Score Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs text-slate-400 uppercase font-semibold block mb-1">Cloud Cost</span>
                <span className="text-xl sm:text-2xl font-black text-white font-mono">
                  ₹{totalCost.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-400 block font-sans">/ month</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs text-slate-400 uppercase font-semibold block mb-1">Performance</span>
                <span className="text-xl sm:text-2xl font-black text-sky-400 font-mono">
                  {displayPerf}%
                </span>
                <span className="text-xs text-slate-400 block font-sans">Sub-50ms latency</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs text-slate-400 uppercase font-semibold block mb-1">Reliability</span>
                <span className="text-xl sm:text-2xl font-black text-indigo-400 font-mono">
                  {displayRel}%
                </span>
                <span className="text-xs text-slate-400 block font-sans">High Availability</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/40">
                <span className="text-xs text-emerald-400 uppercase font-semibold block mb-1">Traffic Test</span>
                <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono flex items-center space-x-1">
                  <span>PASSED</span>
                  <span>✓</span>
                </span>
                <span className="text-xs text-emerald-400/80 block font-sans">50k users handled</span>
              </div>
            </div>

            {/* YOUR CLOUD PROFILE */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 border border-sky-400/30">
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-2">
                YOUR CLOUD PROFILE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                {profile.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {profile.desc}
              </p>
            </div>
          </div>

          {/* Visual Architecture Topology */}
          <div>
            <ArchitectureView 
              computeId={computeId}
              storageIds={storageIds}
              networkingIds={networkingIds}
              monitoringId={monitoringId}
              isTesting={false}
            />
          </div>

          {/* ================= LEARNING SECTION ================= */}
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Foundational Takeaways</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                💡 WHAT DID YOU LEARN?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Key principles discovered during your QuickCart architecture build
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              
              {/* Card 1: Compute */}
              <div className="p-5 rounded-2xl bg-navy-900/90 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base mb-1">COMPUTE</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  "Compute resources run the application's processing workloads."
                </p>
              </div>

              {/* Card 2: Storage */}
              <div className="p-5 rounded-2xl bg-navy-900/90 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                  <HardDrive className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base mb-1">STORAGE</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  "Cloud storage provides scalable ways to store application data and files."
                </p>
              </div>

              {/* Card 3: Networking */}
              <div className="p-5 rounded-2xl bg-navy-900/90 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base mb-1">NETWORKING</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  "Networking connects users and cloud resources and can improve availability and performance."
                </p>
              </div>

              {/* Card 4: Monitoring */}
              <div className="p-5 rounded-2xl bg-navy-900/90 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base mb-1">MONITORING</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  "Monitoring helps teams observe system health and detect problems."
                </p>
              </div>

              {/* Card 5: Scalability */}
              <div className="p-5 rounded-2xl bg-navy-900/90 border border-slate-800 sm:col-span-2 lg:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base mb-1">SCALABILITY</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  "Cloud systems can increase or decrease resources based on demand."
                </p>
              </div>

            </div>
          </div>

          {/* ================= DEVOPS CONNECTION ================= */}
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center justify-center space-x-2">
                <span>🔄</span>
                <span>WHERE DOES DEVOPS FIT?</span>
              </h2>
            </div>

            {/* Pipeline diagram: DEVELOP -> BUILD -> DEPLOY -> MONITOR -> IMPROVE */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
              {['DEVELOP', 'BUILD', 'DEPLOY', 'MONITOR', 'IMPROVE'].map((phase, idx) => (
                <React.Fragment key={phase}>
                  <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-sky-500/30 text-white font-mono font-bold text-xs sm:text-sm shadow-md">
                    {phase}
                  </div>
                  {idx < 4 && (
                    <span className="text-sky-400 font-bold text-lg hidden sm:inline">↓</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-sm sm:text-base text-slate-300 text-center max-w-2xl mx-auto leading-relaxed">
              "DevOps connects development and operations through automation, continuous delivery, monitoring and continuous improvement."
            </p>
          </div>

          {/* ================= RESET / TRY AGAIN BUTTON ================= */}
          <div className="text-center pt-4">
            <button
              onClick={onRedesign}
              className="px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm sm:text-base border border-slate-700 shadow-xl transition-all inline-flex items-center space-x-2 hover:scale-[1.02]"
            >
              <RotateCcw className="w-5 h-5 text-sky-400" />
              <span>DESIGN AGAIN</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
