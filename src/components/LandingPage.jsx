import React from 'react';
import { 
  Cloud, 
  ArrowRight, 
  Cpu, 
  HardDrive, 
  Network, 
  Activity, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  Layers,
  Sparkles,
  Server
} from 'lucide-react';

export default function LandingPage({ onStartBuilding, onOpenDocs }) {
  return (
    <div className="relative overflow-hidden py-10 sm:py-16 lg:py-20">
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs sm:text-sm font-semibold mb-6 animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Interactive Cloud & DevOps Simulation</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4">
            <span className="inline-block animate-float-slow mr-3">☁️</span>
            <span className="bg-gradient-to-r from-white via-slate-100 to-sky-300 bg-clip-text text-transparent">
              CLOUD CITY
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-bold text-sky-400 mb-6 tracking-wide">
            Build Your Own Cloud
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Choose the right cloud infrastructure for a growing online business. Balance cost, performance and reliability.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onStartBuilding}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-navy-950 font-extrabold text-base sm:text-lg tracking-wide shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center space-x-3 group"
            >
              <span>START BUILDING</span>
              <ArrowRight className="w-5 h-5 text-navy-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDocs}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center space-x-2"
            >
              <span>Activity Documentation</span>
            </button>
          </div>

          {/* Mini scenario teaser highlight */}
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-400 mb-16">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Scenario: Scale <strong>QuickCart</strong> from 10k to 50k users under budget!</span>
          </div>

        </div>

        {/* 4 Small Cards: Compute, Storage, Networking, Monitoring */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-800/90 hover:border-sky-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base sm:text-lg mb-1 flex items-center space-x-1.5">
              <span>💻</span>
              <span>Compute</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Virtual servers, vCPUs, and memory to execute business logic and process shopper requests.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/90 hover:border-sky-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <HardDrive className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base sm:text-lg mb-1 flex items-center space-x-1.5">
              <span>💾</span>
              <span>Storage</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Local disks, infinite S3 object buckets, and high-integrity managed relational databases.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/90 hover:border-indigo-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base sm:text-lg mb-1 flex items-center space-x-1.5">
              <span>🌐</span>
              <span>Networking</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Direct IP routing, Layer 7 Load Balancers, and global Edge CDNs for low-latency delivery.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/90 hover:border-emerald-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base sm:text-lg mb-1 flex items-center space-x-1.5">
              <span>📊</span>
              <span>Monitoring</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Telemetry metrics, real-time observability, and automated alerting to prevent customer downtime.
            </p>
          </div>

        </div>

        {/* HOW IT WORKS Section */}
        <div id="how-it-works-section" className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800/80 relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-sky-400 mb-2">
              SIMULATION BLUEPRINT
            </h2>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              HOW IT WORKS
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Experience authentic cloud architect decision-making in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-navy-900/80 border border-slate-800/90 relative group hover:border-sky-500/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 font-extrabold flex items-center justify-center text-lg mb-4 border border-sky-400/30">
                1
              </div>
              <h4 className="font-bold text-white text-lg mb-2">Choose Components</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Select compute tier, persistence media, networking gateways, and observability monitoring tools.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900/80 border border-slate-800/90 relative group hover:border-sky-500/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 font-extrabold flex items-center justify-center text-lg mb-4 border border-cyan-400/30">
                2
              </div>
              <h4 className="font-bold text-white text-lg mb-2">Build Architecture</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Watch an animated SVG cloud architecture topology render in real-time based on your design decisions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900/80 border border-slate-800/90 relative group hover:border-amber-500/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center text-lg mb-4 border border-amber-400/30">
                3
              </div>
              <h4 className="font-bold text-white text-lg mb-2">Test Under Traffic</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Trigger a 50,000-user flash sale traffic spike to see if your cloud withstands load or suffers an outage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900/80 border border-slate-800/90 relative group hover:border-emerald-500/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center text-lg mb-4 border border-emerald-400/30">
                4
              </div>
              <h4 className="font-bold text-white text-lg mb-2">See Cloud Score</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Analyze your monthly cost, throughput speed, reliability, and uncover your custom Cloud Architect Profile!
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onStartBuilding}
              className="inline-flex items-center space-x-2 text-sky-400 hover:text-sky-300 font-semibold text-sm hover:underline"
            >
              <span>Ready to architect? Jump straight into the simulation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
