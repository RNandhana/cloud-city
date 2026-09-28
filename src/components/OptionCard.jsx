import React from 'react';
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Layers, 
  Database, 
  Radio, 
  Split, 
  Globe, 
  EyeOff, 
  Activity, 
  BellRing,
  Check,
  Plus,
  AlertCircle
} from 'lucide-react';

const ICON_MAP = {
  Server,
  Cpu,
  HardDrive,
  Layers,
  Database,
  Radio,
  Split,
  Globe,
  EyeOff,
  Activity,
  BellRing,
};

export default function OptionCard({ 
  option, 
  isSelected, 
  onSelect, 
  isMulti = false,
  customBadge
}) {
  const IconComponent = ICON_MAP[option.icon] || Server;

  const getTagColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'high':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'medium':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/20';
      case 'low':
      case 'none':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      default:
        return 'text-slate-400 bg-slate-800 border-slate-700';
    }
  };

  return (
    <div
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`relative p-5 sm:p-6 rounded-2xl cursor-pointer text-left transition-all duration-300 border flex flex-col justify-between ${
        isSelected
          ? 'bg-sky-950/40 border-sky-400 shadow-xl shadow-sky-500/20 transform -translate-y-1'
          : 'bg-navy-900/80 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/90 hover:-translate-y-0.5'
      }`}
    >
      {/* Top row */}
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
              isSelected 
                ? 'bg-sky-500/20 text-sky-400 border border-sky-400/40' 
                : 'bg-slate-800/80 text-slate-300 border border-slate-700/60'
            }`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-white text-base sm:text-lg">{option.name}</h3>
                {(customBadge || option.badge) && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {customBadge || option.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">{option.specs}</p>
            </div>
          </div>

          {/* Selection indicator pill */}
          <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
            isSelected 
              ? 'bg-sky-500 text-navy-950 font-bold shadow-md shadow-sky-500/50 scale-105' 
              : 'border border-slate-700 text-transparent hover:border-slate-500'
          }`}>
            {isSelected ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : (
              isMulti && <Plus className="w-3.5 h-3.5 text-slate-600" />
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
          {option.description}
        </p>

        {/* Performance & Reliability Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {option.performance && (
            <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border flex items-center space-x-1 ${getTagColor(option.performance)}`}>
              <span>⚡ Perf:</span>
              <span className="font-bold">{option.performance}</span>
            </span>
          )}

          {option.reliability && (
            <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border flex items-center space-x-1 ${getTagColor(option.reliability)}`}>
              <span>🛡️ Rel:</span>
              <span className="font-bold">{option.reliability}</span>
            </span>
          )}

          {option.scalability && (
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg border text-cyan-300 bg-cyan-500/10 border-cyan-500/20">
              {option.scalability}
            </span>
          )}
        </div>
      </div>

      {/* Bottom row: Cost & pros/cons preview */}
      <div className="pt-3 border-t border-slate-800/80 mt-2 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-semibold text-slate-400 block">Monthly Rate</span>
          <span className="text-base sm:text-lg font-black text-white font-mono">
            {option.cost === 0 ? '₹0 (Free)' : `₹${option.cost.toLocaleString('en-IN')}`}
            {option.cost > 0 && <span className="text-xs text-slate-400 font-normal"> / mo</span>}
          </span>
        </div>

        <div className="text-right">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
            isSelected 
              ? 'text-sky-300 bg-sky-500/20 border border-sky-400/30' 
              : 'text-slate-400 hover:text-slate-300'
          }`}>
            {isSelected ? (isMulti ? 'Selected ✓' : 'Active Choice') : (isMulti ? '+ Add Component' : 'Select Option')}
          </span>
        </div>
      </div>

    </div>
  );
}
