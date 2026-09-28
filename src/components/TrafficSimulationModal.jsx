import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  Flame, 
  TrendingUp, 
  Zap, 
  Server, 
  Users, 
  Activity, 
  CheckCircle2, 
  XCircle,
  Play
} from 'lucide-react';

export default function TrafficSimulationModal({
  isOpen,
  onClose,
  cloudScore,
  onSimulationFinish
}) {
  const [isRunning, setIsRunning] = useState(false);
  const [stage, setStage] = useState(0); // 0: Idle, 1: Receiving traffic, 2: Scaling resources, 3: Checking response time, 4: Finished
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [currentRps, setCurrentRps] = useState(10000);

  useEffect(() => {
    if (!isOpen) {
      setIsRunning(false);
      setStage(0);
      setProgress1(0);
      setProgress2(0);
      setProgress3(0);
      setCurrentRps(10000);
    }
  }, [isOpen]);

  const startSimulation = () => {
    setIsRunning(true);
    setStage(1);

    // Stage 1: Receiving traffic (1s)
    let p1 = 0;
    const interval1 = setInterval(() => {
      p1 += 5;
      setProgress1(Math.min(100, p1));
      setCurrentRps(prev => Math.min(50000, prev + 2000));
      if (p1 >= 100) {
        clearInterval(interval1);
        setStage(2);
        
        // Stage 2: Scaling resources (1.2s)
        let p2 = 0;
        const interval2 = setInterval(() => {
          p2 += 5;
          setProgress2(Math.min(100, p2));
          if (p2 >= 100) {
            clearInterval(interval2);
            setStage(3);

            // Stage 3: Checking response time (1.2s)
            let p3 = 0;
            const interval3 = setInterval(() => {
              p3 += 5;
              setProgress3(Math.min(100, p3));
              if (p3 >= 100) {
                clearInterval(interval3);
                setStage(4);
                setTimeout(() => {
                  onSimulationFinish(cloudScore.passed);
                }, 600);
              }
            }, 60);
          }
        }, 60);
      }
    }, 50);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-xl p-6 sm:p-8 rounded-3xl border border-rose-500/40 shadow-2xl shadow-rose-500/10 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Alert Badge */}
        <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider w-max mb-5 animate-pulse">
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          <span>Surge Incident Alert</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2 flex items-center space-x-3">
          <span>🚨</span>
          <span className="text-rose-400">TRAFFIC SPIKE!</span>
        </h2>

        <p className="text-lg font-bold text-slate-200 mb-6">
          "QuickCart is running a flash sale."
        </p>

        {/* Traffic Spike Statistics */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-rose-500/30">
            <div className="flex items-center space-x-2 text-rose-400 text-xs font-semibold uppercase mb-1">
              <Users className="w-4 h-4" />
              <span>Users Increased</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono flex items-center space-x-2">
              <span className="text-slate-400 line-through text-base">10,000</span>
              <span className="text-rose-400">→</span>
              <span className="text-rose-300">50,000</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">Simultaneous active cart checkouts</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase mb-1">
              <TrendingUp className="w-4 h-4" />
              <span>Requests Surge</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-amber-300 font-mono">
              5× normal traffic
            </div>
            <p className="text-[10px] text-slate-400 mt-1">Massive peak load on network & CPU</p>
          </div>
        </div>

        {/* Simulation Execution View */}
        {isRunning ? (
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 mb-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
              <span className="flex items-center space-x-1.5 text-sky-400">
                <Activity className="w-3.5 h-3.5 animate-spin" />
                <span>Simulating Live Stress Test</span>
              </span>
              <span>Load: {currentRps.toLocaleString()} req/m</span>
            </div>

            {/* Sequence 1 */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className={stage >= 1 ? "text-sky-300 font-bold" : "text-slate-500"}>
                  Receiving traffic...
                </span>
                <span className="font-mono text-slate-400">{progress1}%</span>
              </div>
              <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="bg-gradient-to-r from-sky-500 to-cyan-400 h-full transition-all duration-100 rounded-full"
                  style={{ width: `${progress1}%` }}
                />
              </div>
            </div>

            {/* Sequence 2 */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className={stage >= 2 ? "text-indigo-300 font-bold" : "text-slate-500"}>
                  Scaling resources...
                </span>
                <span className="font-mono text-slate-400">{progress2}%</span>
              </div>
              <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-400 h-full transition-all duration-100 rounded-full"
                  style={{ width: `${progress2}%` }}
                />
              </div>
            </div>

            {/* Sequence 3 */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className={stage >= 3 ? "text-emerald-300 font-bold" : "text-slate-500"}>
                  Checking response time...
                </span>
                <span className="font-mono text-slate-400">{progress3}%</span>
              </div>
              <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-100 rounded-full"
                  style={{ width: `${progress3}%` }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6 text-xs text-slate-300">
            <p className="leading-relaxed">
              Click below to initiate the traffic stress simulation. Your configured compute instances, load balancers, database connections, and monitoring alarms will be put to the test under real-time simulated 50,000 concurrent user requests.
            </p>
          </div>
        )}

        {/* Action Button */}
        {!isRunning ? (
          <button
            onClick={startSimulation}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-navy-950 font-black text-base sm:text-lg tracking-wider shadow-xl shadow-rose-500/25 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>TEST MY CLOUD</span>
          </button>
        ) : (
          <div className="text-center py-3 text-xs font-mono text-slate-400 animate-pulse">
            Analyzing telemetry against traffic saturation limits...
          </div>
        )}

      </div>
    </div>
  );
}
