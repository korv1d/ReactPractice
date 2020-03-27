import React from 'react';
import ReactDOM from 'react-dom';
import shoppingCart from '../images/shoppingCart.png';

function ShoppingCart() {
	return (
	
		<div>
		  <img src={shoppingCart} className="cartLogo"/>
		</div>
	
	);
}

export default ShoppingCart;