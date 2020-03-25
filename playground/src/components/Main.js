import React from 'react';
import ReactDOM from 'react-dom';
import JoJo from '../images/HamonClacker.png';
import DIO from '../images/konoDIO.jpg';

function Main(){
	const firstName = "Joseph";
	const lastName = "Joestar";
	
	return(
		<div class = "Bizarre">
			<img src={JoJo} className="Joseph" />
			<img src={DIO} className="DIO" />
			<h6> Jikoshi wo kai sasate morou, ore na wa {firstName + " " + lastName}</h6>
		</div>
	);
}

export default Main;