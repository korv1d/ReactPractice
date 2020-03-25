//Shrink on scroll: NavBar
// https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp

import React from 'react';
import ReactDOM from 'react-dom';

function NavBar() {
	return (
	
		<div class="topnav">
		  <a class="active" href="#home">Home</a>
		  <a href="#news">News</a>
		  <a href="#contact">Contact</a>
		  <a href="#about">About</a>
		</div>
	
	);
}

export default NavBar;