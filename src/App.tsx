// src/App.tsx

import React, { useState } from 'react';
import Header from './components/Header';
import ScenarioCard from './components/ScenarioCard';
import ScenarioDetail from './components/ScenarioDetail';
import { SCENARIOS, Scenario } from './data/scenarios';
import './App.css';

type AppState = 'landing' | 'detail';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);

  const handleSelectScenario = (scenario: Scenario) => {
    setSelectedScenario(scenario);
    setAppState('detail');
  };

  const handleReset = () => {
    setAppState('landing');
    setSelectedScenario(null);
  };

  return (
    <div className="app">
      <Header />

      {appState === 'landing' && (
        <main className="landing">
          {/* Intro section */}
          <section className="intro">
            <div className="intro-inner">
              <div className="intro-label">// TRISCAN™ DEMO PLATFORM — V0</div>
              <h1 className="intro-title">
                CEREBRO<br />
                <span className="title-accent">TBI DETECTION</span><br />
                DEMO
              </h1>
              <p className="intro-desc">
                Select a scenario below to explore the TriScan™ diagnostic protocol in action.
                Each scenario represents a distinct use case — from youth sports to professional
                sideline evaluation. All data is synthetic and for demonstration purposes only.
              </p>
              <div className="intro-meta">
                <div className="meta-item">
                  <span className="meta-num">3</span>
                  <span className="meta-lbl">DEMO SCENARIOS</span>
                </div>
                <div className="meta-divider" />
                <div className="meta-item">
                  <span className="meta-num">3</span>
                  <span className="meta-lbl">DIAGNOSTIC LAYERS</span>
                </div>
                <div className="meta-divider" />
                <div className="meta-item">
                  <span className="meta-num">&lt;4MIN</span>
                  <span className="meta-lbl">PER EVALUATION</span>
                </div>
              </div>
            </div>
          </section>

          {/* Scenario cards */}
          <section className="scenarios-section">
            <div className="scenarios-label">
              <span>// SELECT A DEMO SCENARIO</span>
              <span className="scenarios-count">{SCENARIOS.length} AVAILABLE</span>
            </div>
            <div className="scenarios-grid">
              {SCENARIOS.map((scenario) => (
                <ScenarioCard
                  key={scenario.id}
                  scenario={scenario}
                  onSelect={handleSelectScenario}
                  isSelected={selectedScenario?.id === scenario.id}
                />
              ))}
            </div>
          </section>

          <footer className="landing-footer">
            <span className="footer-logo">
              <span style={{ color: '#00f5c4' }}>CEREBRO</span> NEUROTECH INC.
            </span>
            <span className="footer-disclaimer">
              MOCK DATA ONLY — No real patient data. Demo environment.
            </span>
            <span className="footer-version">Demo Landing Page v0 · 2026</span>
          </footer>
        </main>
      )}

      {appState === 'detail' && selectedScenario && (
        <main className="detail-main">
          <ScenarioDetail scenario={selectedScenario} onReset={handleReset} />
        </main>
      )}
    </div>
  );
};

export default App;
