//each App file should contain only one React components

import React, {Component} from 'react';
import Toolbar from './components/Toolbar.js'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className = "App">
				<header className="App-header">
					<Toolbar />
				</header>
			</div>
		);
	}
}

export default App;