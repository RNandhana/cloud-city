import React from 'react';
import { 
  Users, 
  Globe, 
  Split, 
  Radio, 
  Server, 
  Cpu, 
  HardDrive, 
  Layers, 
  Database, 
  EyeOff, 
  Activity, 
  BellRing,
  ArrowDown,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { 
  COMPUTE_OPTIONS, 
  STORAGE_OPTIONS, 
  NETWORKING_OPTIONS, 
  MONITORING_OPTIONS 
} from '../data/componentsData';

export default function ArchitectureView({ 
  computeId, 
  storageIds, 
  networkingIds, 
  monitoringId,
  isTesting = false 
}) {
  const compute = COMPUTE_OPTIONS.find(c => c.id === computeId) || COMPUTE_OPTIONS[0];
  const selectedStorage = STORAGE_OPTIONS.filter(s => storageIds.includes(s.id));
  const selectedNet = NETWORKING_OPTIONS.filter(n => networkingIds.includes(n.id));
  const monitoring = MONITORING_OPTIONS.find(m => m.id === monitoringId) || MONITORING_OPTIONS[0];

  const hasLB = networkingIds.includes('load_balancer');
  const hasCDN = networkingIds.includes('cdn');
  const isDirect = networkingIds.includes('direct') || (!hasLB && !hasCDN);

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-sky-500/30 shadow-2xl relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-8 border-b border-slate-800/80 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center space-x-2">
            <span>Dynamic Cloud Topology</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-400/30">
              Interactive SVG
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Real-time visual diagram generated from your infrastructure choices
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300 font-mono">Live Traffic Route</span>
        </div>
      </div>

      {/* Vertical Animated Flow Diagram */}
      <div className="max-w-xl mx-auto flex flex-col items-center space-y-3 relative">
        
        {/* ================= 1. USERS LAYER ================= */}
        <div className="w-full max-w-md p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-lg text-center transform transition-transform hover:scale-[1.01]">
          <div className="flex items-center justify-center space-x-3 mb-1">
            <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-white text-base tracking-wide">👥 USERS</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/20">
              {isTesting ? '50,000 Surging Shoppers' : '10,000 Concurrent Shoppers'}
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Global browser & mobile app clients requesting QuickCart store catalog
          </p>
        </div>

        {/* Animated Connector 1 */}
        <div className="h-10 flex flex-col items-center justify-center">
          <svg className="w-6 h-10 overflow-visible">
            <line 
              x1="12" y1="0" x2="12" y2="40" 
              stroke="#38bdf8" 
              strokeWidth="2.5" 
              className={isTesting ? "animate-flow-fast" : "animate-flow"}
            />
          </svg>
          <div className="-mt-1.5 text-sky-400">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>

        {/* ================= 2. NETWORK LAYER ================= */}
        <div className="w-full max-w-lg p-5 rounded-2xl bg-navy-900/95 border-2 border-indigo-500/40 shadow-xl">
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-black text-indigo-300 tracking-wider">🌐 NETWORKING LAYER</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Ingress Gateway</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {hasCDN && (
              <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/40 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Global Edge CDN</h4>
                  <p className="text-[10px] text-slate-300">Caches static assets at 300+ edge PoPs</p>
                </div>
              </div>
            )}

            {hasLB ? (
              <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/40 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                  <Split className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Application Load Balancer</h4>
                  <p className="text-[10px] text-slate-300">Even round-robin traffic distribution</p>
                </div>
              </div>
            ) : isDirect ? (
              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/40 flex items-center space-x-3 sm:col-span-2">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-xs font-bold text-amber-300">Direct Server Access</h4>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono">Single Point of Failure</span>
                  </div>
                  <p className="text-[10px] text-slate-300">Users connect directly to virtual machine public IP</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Animated Connector 2 */}
        <div className="h-10 flex flex-col items-center justify-center">
          <svg className="w-6 h-10 overflow-visible">
            <line 
              x1="12" y1="0" x2="12" y2="40" 
              stroke="#6366f1" 
              strokeWidth="2.5" 
              className={isTesting ? "animate-flow-fast" : "animate-flow"}
            />
          </svg>
          <div className="-mt-1.5 text-indigo-400">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>

        {/* ================= 3. COMPUTE LAYER ================= */}
        <div className="w-full max-w-lg p-5 rounded-2xl bg-navy-900/95 border-2 border-sky-500/50 shadow-xl">
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-black text-sky-300 tracking-wider">💻 COMPUTE LAYER</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Application Execution</span>
          </div>

          <div className="p-3.5 rounded-xl bg-sky-950/40 border border-sky-500/30 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                {computeId === 'large' ? <Cpu className="w-5 h-5" /> : <Server className="w-5 h-5" />}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm font-bold text-white">{compute.name}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-sky-300 font-mono">
                    {compute.specs.split('•')[0]}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">{compute.specs}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-emerald-400">₹{compute.cost}/mo</span>
              <span className="block text-[10px] text-slate-400">Cap: ~{compute.trafficCapacity.toLocaleString()} req/m</span>
            </div>
          </div>
        </div>

        {/* Animated Connector 3 */}
        <div className="h-10 flex flex-col items-center justify-center">
          <svg className="w-6 h-10 overflow-visible">
            <line 
              x1="12" y1="0" x2="12" y2="40" 
              stroke="#0ea5e9" 
              strokeWidth="2.5" 
              className={isTesting ? "animate-flow-fast" : "animate-flow"}
            />
          </svg>
          <div className="-mt-1.5 text-sky-400">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>

        {/* ================= 4. STORAGE LAYER ================= */}
        <div className="w-full max-w-lg p-5 rounded-2xl bg-navy-900/95 border-2 border-cyan-500/50 shadow-xl">
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-black text-cyan-300 tracking-wider">💾 STORAGE LAYER</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Data Persistence</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {selectedStorage.map((st) => (
              <div 
                key={st.id} 
                className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center space-x-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  {st.id === 'managed_db' && <Database className="w-4 h-4" />}
                  {st.id === 'object_storage' && <Layers className="w-4 h-4" />}
                  {st.id === 'local_disk' && <HardDrive className="w-4 h-4" />}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">{st.name}</h4>
                  <p className="text-[10px] text-slate-300 truncate">₹{st.cost}/mo • {st.scalability || st.specs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Connector 4 */}
        <div className="h-10 flex flex-col items-center justify-center">
          <svg className="w-6 h-10 overflow-visible">
            <line 
              x1="12" y1="0" x2="12" y2="40" 
              stroke="#10b981" 
              strokeWidth="2.5" 
              className={isTesting ? "animate-flow-fast" : "animate-flow"}
            />
          </svg>
          <div className="-mt-1.5 text-emerald-400">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>

        {/* ================= 5. MONITORING LAYER ================= */}
        <div className="w-full max-w-lg p-5 rounded-2xl bg-navy-900/95 border-2 border-emerald-500/40 shadow-xl">
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-black text-emerald-300 tracking-wider">📊 OBSERVABILITY & MONITORING</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">System Telemetry</span>
          </div>

          <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
            monitoringId === 'none' 
              ? 'bg-rose-950/20 border-rose-500/30' 
              : 'bg-emerald-950/30 border-emerald-500/30'
          }`}>
            <div className="flex items-center space-x-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                monitoringId === 'none' 
                  ? 'bg-rose-500/20 text-rose-400' 
                  : 'bg-emerald-500/20 text-emerald-400'
              }`}>
                {monitoringId === 'none' && <EyeOff className="w-5 h-5" />}
                {monitoringId === 'basic' && <Activity className="w-5 h-5" />}
                {monitoringId === 'alerts' && <BellRing className="w-5 h-5" />}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center space-x-2">
                  <span>{monitoring.name}</span>
                  {monitoringId === 'none' && (
                    <span className="text-[10px] text-rose-400 font-semibold">(No Incident Awareness)</span>
                  )}
                </h4>
                <p className="text-[10px] text-slate-300">{monitoring.specs}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-white">
                {monitoring.cost === 0 ? '₹0' : `₹${monitoring.cost}/mo`}
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
