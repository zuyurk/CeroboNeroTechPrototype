// src/components/ScenarioDetail.tsx

import React, { useEffect, useState } from 'react';
import { Scenario } from '../data/scenarios';

interface Props {
  scenario: Scenario;
  onReset: () => void;
}

const TAG_COLORS: Record<string, string> = {
  primary: '#00f5c4',
  warning: '#ffaa00',
  danger: '#ff3355',
};

const ScenarioDetail: React.FC<Props> = ({ scenario, onReset }) => {
  const [visible, setVisible] = useState(false);
  const accent = TAG_COLORS[scenario.tagColor];

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`detail-view ${visible ? 'visible' : ''}`}>
      {/* Back + Reset */}
      <div className="detail-topbar">
        <button className="back-btn" onClick={onReset}>
          ← BACK TO SCENARIOS
        </button>
        <div className="detail-tag" style={{ color: accent, borderColor: `${accent}40` }}>
          {scenario.tag}
        </div>
      </div>

      {/* Header */}
      <div className="detail-header">
        <div>
          <div className="detail-session-label">ACTIVE DEMO SESSION</div>
          <h2 className="detail-title">{scenario.title}</h2>
          <p className="detail-subtitle">{scenario.subtitle}</p>
        </div>
        <div className="priority-flag" style={{ color: accent, borderColor: accent }}>
          <span className="priority-dot" style={{ background: accent }} />
          {scenario.detail.priority}
        </div>
      </div>

      {/* Main grid */}
      <div className="detail-grid">
        {/* Left column */}
        <div className="detail-left">
          <div className="detail-panel">
            <div className="panel-label">SESSION INFO</div>
            <div className="info-row">
              <span className="info-key">Session Type</span>
              <span className="info-val">{scenario.detail.sessionType}</span>
            </div>
            <div className="info-row">
              <span className="info-key">Patient Profile</span>
              <span className="info-val">{scenario.detail.patientProfile}</span>
            </div>
            <div className="info-row">
              <span className="info-key">Protocol</span>
              <span className="info-val">{scenario.detail.protocol}</span>
            </div>
            <div className="info-row">
              <span className="info-key">Est. Duration</span>
              <span className="info-val">{scenario.detail.estimatedDuration}</span>
            </div>
          </div>

          <div className="detail-panel status-panel">
            <div className="panel-label">STATUS</div>
            <div className="status-badge" style={{ color: accent, borderColor: `${accent}30`, background: `${accent}08` }}>
              <span className="status-dot" style={{ background: accent }} />
              {scenario.detail.status}
            </div>
          </div>

          <div className="detail-panel nextstep-panel">
            <div className="panel-label">NEXT STEP</div>
            <p className="nextstep-text" style={{ borderLeftColor: accent }}>
              {scenario.detail.nextStep}
            </p>
          </div>
        </div>

        {/* Right column — metadata */}
        <div className="detail-right">
          <div className="detail-panel full-height">
            <div className="panel-label">SESSION METADATA</div>
            <div className="metadata-list">
              {Object.entries(scenario.detail.metadata).map(([key, val]) => (
                <div className="meta-row" key={key}>
                  <span className="meta-key">{key}</span>
                  <span className="meta-val">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TriScan progress visual */}
          <div className="detail-panel triscan-panel">
            <div className="panel-label">TRISCAN™ LAYERS</div>
            <div className="triscan-layers">
              {['HELMET SCAN', 'COGNITIVE TEST', 'BLOOD PANEL'].map((layer, i) => {
                const done = scenario.id === 'sideline-evaluation'
                  ? i < 2
                  : scenario.id === 'adult-followup'
                  ? i < 1
                  : false;
                const active = scenario.id === 'sideline-evaluation' && i === 2;
                return (
                  <div key={layer} className={`layer-item ${done ? 'done' : ''} ${active ? 'active' : ''}`}>
                    <div className="layer-indicator" style={done ? { background: accent } : active ? { borderColor: accent, boxShadow: `0 0 8px ${accent}60` } : {}}>
                      {done ? '✓' : active ? '●' : String(i + 1)}
                    </div>
                    <span className="layer-name">{layer}</span>
                    <span className="layer-status">
                      {done ? 'COMPLETE' : active ? 'IN PROGRESS' : 'PENDING'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="detail-footer">
        <button className="reset-btn" onClick={onReset}>
          ↺ RESET DEMO
        </button>
        <div className="disclaimer">
          ⚠ MOCK DATA ONLY — This prototype uses synthetic data. No real patient information.
        </div>
      </div>
    </div>
  );
};

export default ScenarioDetail;
