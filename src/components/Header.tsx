// src/components/Header.tsx

import React from 'react';

const Header: React.FC = () => (
  <header className="app-header">
    <div className="header-inner">
      <div className="header-logo">
        <span className="logo-cerebro">CEREBRO</span>
        <span className="logo-neurotech"> NEUROTECH</span>
      </div>
      <div className="header-right">
        <div className="header-badge">DEMO ENVIRONMENT</div>
        <div className="header-version">v0.1.0</div>
      </div>
    </div>
  </header>
);

export default Header;
