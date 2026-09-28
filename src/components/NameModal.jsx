import React, { useState, useEffect } from 'react';
import { User, Check, Sparkles } from 'lucide-react';

export default function NameModal({ isOpen, onClose, onSave, currentName }) {
  const [name, setName] = useState(currentName || '');

  useEffect(() => {
    setName(currentName || '');
  }, [currentName, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed) {
      onSave(trimmed);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-md p-6 sm:p-8 rounded-2xl border border-sky-500/30 shadow-2xl shadow-sky-500/10 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Student Identity</h3>
            <p className="text-xs text-slate-400">Cloud & DevOps Essentials Lab</p>
          </div>
        </div>

        <p className="text-sm text-slate-300 mb-5 leading-relaxed">
          Please enter your name so your cloud architecture certificate, score, and evaluation report can be customized for your classroom presentation.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Student / Architect Name
            </label>
            <div className="relative">
              <input
                type="text"
                autoFocus
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Sharma / Cloud Architect"
                className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all"
              />
              <Sparkles className="absolute right-3.5 top-3.5 w-4 h-4 text-sky-400/50" />
            </div>
          </div>

          <div className="flex items-center justify-end space-x-3 pt-3">
            {currentName && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={!name.trim()}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-navy-950 font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Check className="w-4 h-4" />
              <span>Confirm & Continue</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
