// src/components/ScenarioCard.tsx

import React from 'react';
import { Scenario } from '../data/scenarios';

interface Props {
  scenario: Scenario;
  onSelect: (scenario: Scenario) => void;
  isSelected: boolean;
}

const TAG_COLORS: Record<string, string> = {
  primary: '#00f5c4',
  warning: '#ffaa00',
  danger: '#ff3355',
};

const ScenarioCard: React.FC<Props> = ({ scenario, onSelect, isSelected }) => {
  const accentColor = TAG_COLORS[scenario.tagColor];

  return (
    <div
      className={`scenario-card ${isSelected ? 'selected' : ''}`}
      style={{ '--accent': accentColor } as React.CSSProperties}
      onClick={() => onSelect(scenario)}
    >
      <div className="card-top-bar" />
      <div className="card-tag" style={{ color: accentColor, borderColor: `${accentColor}40` }}>
        {scenario.tag}
      </div>
      <h3 className="card-title">{scenario.title}</h3>
      <p className="card-subtitle">{scenario.subtitle}</p>
      <p className="card-summary">{scenario.summary}</p>
      <div className="card-footer">
        <div className="priority-badge" style={{ color: accentColor }}>
          {scenario.detail.priority} PRIORITY
        </div>
        <button
          className="start-btn"
          style={{ background: accentColor }}
          onClick={(e) => { e.stopPropagation(); onSelect(scenario); }}
        >
          START DEMO
        </button>
      </div>
    </div>
  );
};

export default ScenarioCard;
