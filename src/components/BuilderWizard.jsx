import React from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Cpu, 
  HardDrive, 
  Network, 
  Activity, 
  Check, 
  Sparkles,
  Info
} from 'lucide-react';
import OptionCard from './OptionCard';
import LiveMetricsBar from './LiveMetricsBar';
import { 
  COMPUTE_OPTIONS, 
  STORAGE_OPTIONS, 
  NETWORKING_OPTIONS, 
  MONITORING_OPTIONS 
} from '../data/componentsData';

const STEPS = [
  { id: 1, name: 'Compute', icon: Cpu },
  { id: 2, name: 'Storage', icon: HardDrive },
  { id: 3, name: 'Networking', icon: Network },
  { id: 4, name: 'Monitoring', icon: Activity },
];

export default function BuilderWizard({
  currentStep,
  setCurrentStep,
  computeId,
  setComputeId,
  storageIds,
  setStorageIds,
  networkingIds,
  setNetworkingIds,
  monitoringId,
  setMonitoringId,
  cloudScore,
  onBuildCloud
}) {

  // Handlers for toggles
  const handleStorageToggle = (id) => {
    if (storageIds.includes(id)) {
      // Keep at least one storage option selected
      if (storageIds.length > 1) {
        setStorageIds(storageIds.filter(item => item !== id));
      }
    } else {
      setStorageIds([...storageIds, id]);
    }
  };

  const handleNetworkingSelect = (id) => {
    if (id === 'direct') {
      // Direct replaces LB and CDN
      setNetworkingIds(['direct']);
    } else if (id === 'load_balancer') {
      // Toggle LB; if selecting LB, remove direct
      const withoutDirect = networkingIds.filter(item => item !== 'direct');
      if (networkingIds.includes('load_balancer')) {
        // If unchecking LB, check if CDN is left, else fallback to direct
        const remaining = withoutDirect.filter(item => item !== 'load_balancer');
        setNetworkingIds(remaining.length > 0 ? remaining : ['direct']);
      } else {
        setNetworkingIds([...withoutDirect, 'load_balancer']);
      }
    } else if (id === 'cdn') {
      // Toggle CDN; if selecting CDN, remove direct
      const withoutDirect = networkingIds.filter(item => item !== 'direct');
      if (networkingIds.includes('cdn')) {
        const remaining = withoutDirect.filter(item => item !== 'cdn');
        setNetworkingIds(remaining.length > 0 ? remaining : ['direct']);
      } else {
        setNetworkingIds([...withoutDirect, 'cdn']);
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-fadeIn">
      
      {/* Real-time score bar */}
      <div className="mb-8">
        <LiveMetricsBar score={cloudScore} />
      </div>

      {/* Step Indicator Progress Bar */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 mb-8">
        <div className="grid grid-cols-4 gap-2">
          {STEPS.map((step) => {
            const Icon = step.icon;
            const isCompleted = currentStep > step.id;
            const isCurrent = currentStep === step.id;

            return (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`flex flex-col sm:flex-row items-center justify-center p-2.5 rounded-xl transition-all ${
                  isCurrent
                    ? 'bg-sky-500/20 border border-sky-400/40 text-sky-300 font-bold'
                    : isCompleted
                    ? 'bg-slate-900/60 text-emerald-400 hover:bg-slate-800/80 font-medium'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    isCurrent
                      ? 'bg-sky-500 text-navy-950 font-bold'
                      : isCompleted
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30'
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.id}
                  </div>
                  <span className="hidden sm:inline text-xs sm:text-sm">{step.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Step Content Card */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800/90 shadow-2xl relative mb-8">
        
        {/* STEP 1: COMPUTE */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-400">Step 1 of 4</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">Choose Your Compute</h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                "Where should the application run?"
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Your compute choice determines raw processing power, concurrent connection limits, and request execution speed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {COMPUTE_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.id}
                  option={opt}
                  isSelected={computeId === opt.id}
                  onSelect={() => setComputeId(opt.id)}
                />
              ))}
            </div>

            <div className="flex items-center justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-navy-950 font-bold text-sm tracking-wide shadow-lg shadow-sky-500/25 flex items-center space-x-2 group transition-all"
              >
                <span>NEXT → STORAGE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: STORAGE */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400">Step 2 of 4</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">Choose Your Storage</h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                Select where QuickCart should persist customer accounts, product catalogs, order payments, and media.
              </p>
              <div className="flex items-center space-x-2 mt-2 text-xs text-sky-300 bg-sky-500/10 px-3 py-1.5 rounded-lg border border-sky-500/20 max-w-fit">
                <Info className="w-4 h-4 flex-shrink-0" />
                <span>Tip: Production applications commonly combine Managed Databases with Object Storage.</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {STORAGE_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.id}
                  option={opt}
                  isSelected={storageIds.includes(opt.id)}
                  onSelect={() => handleStorageToggle(opt.id)}
                  isMulti={true}
                />
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold flex items-center space-x-2 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>BACK</span>
              </button>

              <button
                onClick={() => setCurrentStep(3)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-navy-950 font-bold text-sm tracking-wide shadow-lg shadow-sky-500/25 flex items-center space-x-2 group transition-all"
              >
                <span>NEXT → NETWORKING</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: NETWORKING */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Step 3 of 4</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">Connect Your Users</h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                "How should shopper traffic reach your application?"
              </p>
              <div className="flex items-center space-x-2 mt-2 text-xs text-indigo-300 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20 max-w-fit">
                <Info className="w-4 h-4 flex-shrink-0" />
                <span>Tip: A Load Balancer distributes traffic across servers. A CDN brings static images closer to customers worldwide.</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {NETWORKING_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.id}
                  option={opt}
                  isSelected={networkingIds.includes(opt.id)}
                  onSelect={() => handleNetworkingSelect(opt.id)}
                  isMulti={opt.id !== 'direct'}
                />
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold flex items-center space-x-2 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>BACK</span>
              </button>

              <button
                onClick={() => setCurrentStep(4)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-navy-950 font-bold text-sm tracking-wide shadow-lg shadow-sky-500/25 flex items-center space-x-2 group transition-all"
              >
                <span>NEXT → MONITORING</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: MONITORING */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Step 4 of 4</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">Keep Watch Over Your Cloud</h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                "Monitoring helps you detect problems before they become major incidents."
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Without monitoring, you won't know if a server runs out of RAM or crashes until customers abandon their shopping carts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {MONITORING_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.id}
                  option={opt}
                  isSelected={monitoringId === opt.id}
                  onSelect={() => setMonitoringId(opt.id)}
                />
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => setCurrentStep(3)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold flex items-center space-x-2 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>BACK</span>
              </button>

              <button
                onClick={onBuildCloud}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-400 hover:from-emerald-400 hover:to-sky-300 text-navy-950 font-black text-sm sm:text-base tracking-wide shadow-xl shadow-emerald-500/25 flex items-center space-x-2 group transition-all transform hover:scale-[1.02]"
              >
                <Sparkles className="w-5 h-5 text-navy-950" />
                <span>BUILD MY CLOUD</span>
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
