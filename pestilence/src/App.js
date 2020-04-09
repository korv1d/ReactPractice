// each App file should contain only one React components

import React, {Component} from 'react';
import logo from './logo.svg';

import './App.css'

class App extends Component {

  var express = require('express');
  var router = express.Router();
  var exec = require('child_process') exec;

  //rounter.get('/', function(req, res, next) {
    exec('ls', function(err, stdout, stderr){
      console.log(stdout); 
    })})
	render() {
		return (
			<div className = "App" style={{height: '100%'}}>
				<header className="App-header">
          
					<p> back to basics </p>
					<button type="button">
						Click me!
            {console.log("Hello!")}
					</button>
				</header>
			</div>
		);
	}
}

export default App;
