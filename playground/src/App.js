import React from 'react';
import logo from './logo.svg';
import inigo from './inigoMontoya.jpg';
import './App.css';
//Testing comments
function App() {
  //returns html contents to index.js' App parameter
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Inigo Montoya's guide to networking success:
        </p>
        <ol>
          <li> Polite greeting </li>
          <li> Introduce yourself </li>
          <li> Relevant personal link </li>
          <li> Manage expectations </li>
        </ol>
        <p>
          e.g.<br/><br/>
      
          Hello<br/>
          My name is Inigo Montoya<br/>
          You killed my father<br/>
          Prepare to die

        </p>

        <a
          className="App-link"
          href="https://imgur.com/gallery/klVL7XQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          But what if...
        </a>
      </header>
    </div>
  );
}

export default App;
