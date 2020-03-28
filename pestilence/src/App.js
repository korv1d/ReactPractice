//each App file should contain only one React components

import React, {Component} from 'react';
import Toolbar from './components/Toolbar.js';
import SideDrawer from './components/SideDrawer.js';
import './App.css'

class App extends Component {
	render() {
		return (
			<div className = "App" style={{height: '100%'}}>
				<Toolbar />
				<SideDrawer />
				<header className="App-header">
					
				</header>
			</div>
		);
	}
}

export default App;