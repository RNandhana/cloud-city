import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ScenarioCard from './components/ScenarioCard';
import BuilderWizard from './components/BuilderWizard';
import ArchitectureView from './components/ArchitectureView';
import TrafficSimulationModal from './components/TrafficSimulationModal';
import ResultsView from './components/ResultsView';
import DocumentationModal from './components/DocumentationModal';
import NameModal from './components/NameModal';
import Footer from './components/Footer';
import { calculateCloudScore } from './data/componentsData';
import { Play, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';

export default function App() {
  // Navigation view: 'landing' | 'scenario' | 'builder' | 'results'
  const [currentView, setCurrentView] = useState('landing');

  // Student profile state with localStorage persistence
  const [studentName, setStudentName] = useState(() => {
    return localStorage.getItem('cloudCity_studentName') || '';
  });
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [isTrafficModalOpen, setIsTrafficModalOpen] = useState(false);

  // Cloud component selections
  const [currentStep, setCurrentStep] = useState(1);
  const [computeId, setComputeId] = useState('medium');
  const [storageIds, setStorageIds] = useState(['managed_db', 'object_storage']);
  const [networkingIds, setNetworkingIds] = useState(['load_balancer', 'cdn']);
  const [monitoringId, setMonitoringId] = useState('basic');

  // Traffic simulation & result state
  const [hasSimulated, setHasSimulated] = useState(false);
  const [simulationPassed, setSimulationPassed] = useState(false);

  // Save student name to localStorage
  const handleSaveName = (name) => {
    setStudentName(name);
    localStorage.setItem('cloudCity_studentName', name);
  };

  // Cloud Score Calculation
  const cloudScore = calculateCloudScore(computeId, storageIds, networkingIds, monitoringId);

  // Reset entire design
  const handleReset = () => {
    setComputeId('medium');
    setStorageIds(['managed_db']);
    setNetworkingIds(['direct']);
    setMonitoringId('basic');
    setCurrentStep(1);
    setHasSimulated(false);
    setSimulationPassed(false);
    setCurrentView('builder');
  };

  // Action from Landing Page -> Start Building
  const handleStartBuilding = () => {
    if (!studentName) {
      setIsNameModalOpen(true);
    }
    setCurrentView('scenario');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Action from Scenario -> Start Designing
  const handleStartDesigning = () => {
    setCurrentView('builder');
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Action when student clicks "BUILD MY CLOUD"
  const handleBuildCloud = () => {
    setIsTrafficModalOpen(true);
  };

  // Action when traffic simulation completes
  const handleSimulationFinish = (passed) => {
    setIsTrafficModalOpen(false);
    setHasSimulated(true);
    setSimulationPassed(passed);
    setCurrentView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      
      {/* Navbar */}
      <Navbar
        studentName={studentName}
        onOpenNameModal={() => setIsNameModalOpen(true)}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currentView={currentView}
        onOpenDocs={() => setIsDocsOpen(true)}
        onReset={handleReset}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* VIEW 1: LANDING PAGE */}
        {currentView === 'landing' && (
          <LandingPage
            onStartBuilding={handleStartBuilding}
            onOpenDocs={() => setIsDocsOpen(true)}
          />
        )}

        {/* VIEW 2: SCENARIO BRIEFING (QUICKCART) */}
        {currentView === 'scenario' && (
          <ScenarioCard
            studentName={studentName}
            onStartDesigning={handleStartDesigning}
          />
        )}

        {/* VIEW 3: BUILDER WIZARD */}
        {currentView === 'builder' && (
          <div>
            <BuilderWizard
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              computeId={computeId}
              setComputeId={setComputeId}
              storageIds={storageIds}
              setStorageIds={setStorageIds}
              networkingIds={networkingIds}
              setNetworkingIds={setNetworkingIds}
              monitoringId={monitoringId}
              setMonitoringId={setMonitoringId}
              cloudScore={cloudScore}
              onBuildCloud={handleBuildCloud}
            />

            {/* Live architecture preview container below steps */}
            <div className="max-w-5xl mx-auto px-4 pb-12">
              <ArchitectureView
                computeId={computeId}
                storageIds={storageIds}
                networkingIds={networkingIds}
                monitoringId={monitoringId}
                isTesting={false}
              />
            </div>
          </div>
        )}

        {/* VIEW 4: RESULTS & LEARNING DASHBOARD */}
        {currentView === 'results' && (
          <ResultsView
            passed={simulationPassed}
            studentName={studentName}
            cloudScore={cloudScore}
            computeId={computeId}
            storageIds={storageIds}
            networkingIds={networkingIds}
            monitoringId={monitoringId}
            onTryAgain={() => {
              setCurrentView('builder');
              setCurrentStep(1);
            }}
            onRedesign={handleReset}
          />
        )}

      </main>

      {/* Footer */}
      <Footer 
        onOpenDocs={() => setIsDocsOpen(true)}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Modals */}
      <NameModal
        isOpen={isNameModalOpen}
        onClose={() => setIsNameModalOpen(false)}
        onSave={handleSaveName}
        currentName={studentName}
      />

      <TrafficSimulationModal
        isOpen={isTrafficModalOpen}
        onClose={() => setIsTrafficModalOpen(false)}
        cloudScore={cloudScore}
        onSimulationFinish={handleSimulationFinish}
      />

      <DocumentationModal
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
      />

    </div>
  );
}
