import React from 'react';
import ReactDOM from 'react-dom';
import JoJo from '../images/HamonClacker.png';
import DIO from '../images/konoDIO.jpg';

function Main(){
	const firstName = "Joseph";
	const lastName = "Joestar";
	
	return(
		<div id="cf">
			<img class="bottom" src={DIO} />
			<img class="top" src={JoJo} />
		</div>
	);
}

export default Main;