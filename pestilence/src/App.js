import React from 'react';
import logo from './logo.svg';
import './App.css';

import OurMission from './components/OurMission.js';
import WhyLA from './components/WhyLA.js';
import Help from './components/Help.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OurMission />
        <WhyLA />
        <Help />
      </header>
    </div>
  );
}

export default App;
