import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ContentCalendar from './components/ContentCalendar';
import ScriptGen from './components/ScriptGen';
import BioOptimizer from './components/BioOptimizer';
import ProductStrategy from './components/ProductStrategy';
import GrowthTactics from './components/GrowthTactics';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard />;
      case ViewState.CALENDAR:
        return <ContentCalendar />;
      case ViewState.SCRIPTS:
        return <ScriptGen />;
      case ViewState.PROFILE:
        return <BioOptimizer />;
      case ViewState.STRATEGY:
        return <ProductStrategy />;
      case ViewState.GROWTH:
        return <GrowthTactics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <main className="ml-64 flex-1 p-8 lg:p-12 overflow-y-auto h-screen">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;