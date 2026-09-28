import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Target, 
  Lightbulb, 
  Cpu, 
  GitBranch, 
  Code2, 
  GraduationCap, 
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { DOCUMENTATION_CONTENT } from '../data/docData';

export default function DocumentationModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-4xl max-h-[90vh] rounded-3xl border border-sky-500/30 shadow-2xl flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-navy-900/90">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-400/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white tracking-tight">Activity Documentation</h2>
              <p className="text-xs text-sky-400 font-medium">Cloud & DevOps Essentials Classroom Guide</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto border-b border-slate-800 px-6 bg-slate-950/50 text-xs font-semibold">
          {[
            { id: 'overview', label: '1-3. Overview & Concept' },
            { id: 'howItWorks', label: '4. How It Works' },
            { id: 'cloudConcepts', label: '5. Cloud Concepts' },
            { id: 'devops', label: '6. DevOps Connection' },
            { id: 'techAndOutcome', label: '7-8. Tech & Outcomes' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-4 border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-sky-400 text-sky-400 font-bold bg-sky-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Body content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  <span>1. Activity Name</span>
                </h3>
                <p className="text-xl font-black text-white">{DOCUMENTATION_CONTENT.activityName}</p>
                <p className="text-xs text-slate-400 mt-1">Interactive Cloud & DevOps Essentials Classroom Simulation</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1 flex items-center space-x-1.5">
                  <Target className="w-4 h-4 text-sky-400" />
                  <span>2. Objective</span>
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  {DOCUMENTATION_CONTENT.objective}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1 flex items-center space-x-1.5">
                  <Lightbulb className="w-4 h-4 text-sky-400" />
                  <span>3. Concept</span>
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  {DOCUMENTATION_CONTENT.concept}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: HOW IT WORKS */}
          {activeTab === 'howItWorks' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                4. How the Activity Works
              </h3>
              <div className="space-y-3">
                {DOCUMENTATION_CONTENT.howItWorks.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <h4 className="font-bold text-white text-sm mb-1">{item.step}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CLOUD CONCEPTS */}
          {activeTab === 'cloudConcepts' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                5. Cloud Concepts Covered
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DOCUMENTATION_CONTENT.cloudConcepts.map((concept, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <h4 className="font-bold text-white text-sm mb-1 text-sky-300">{concept.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{concept.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: DEVOPS */}
          {activeTab === 'devops' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                  6. DevOps Connection
                </h3>
                <p className="text-slate-200 leading-relaxed mb-4">
                  {DOCUMENTATION_CONTENT.devopsConnection.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {DOCUMENTATION_CONTENT.devopsConnection.stages.map((stage, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-navy-900 border border-slate-800 text-center">
                    <span className="text-[10px] text-sky-400 font-mono block">Stage 0{idx + 1}</span>
                    <h4 className="font-black text-white text-xs my-1">{stage.name}</h4>
                    <p className="text-[10px] text-slate-400 leading-tight">{stage.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: TECH & OUTCOME */}
          {activeTab === 'techAndOutcome' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3 flex items-center space-x-1.5">
                  <Code2 className="w-4 h-4 text-sky-400" />
                  <span>7. Technologies Used</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {DOCUMENTATION_CONTENT.technologiesUsed.map((tech, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center space-x-1.5">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>8. Learning Outcome</span>
                </h3>
                <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">
                  {DOCUMENTATION_CONTENT.learningOutcome}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-navy-950 flex items-center justify-between text-xs text-slate-400">
          <span>Cloud & DevOps Essentials Laboratory Activity</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors"
          >
            Close Documentation
          </button>
        </div>

      </div>
    </div>
  );
}
