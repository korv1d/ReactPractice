import React from 'react';
import './App.css';

import Logo from './components/Logo.js';


function App() {

  const firstName = "Joseph";
  const lastName = "Joestar";

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
    </div>
  );
}

export default App;
