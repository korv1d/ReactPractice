import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCHK3FZLIhK7Pld4sKujAJFH1oOstcXC1w",
  authDomain: "im-tutorial-bbb9b.firebaseapp.com",
  databaseURL: "https://im-tutorial-bbb9b.firebaseio.com",
  projectId: "im-tutorial-bbb9b",
  storageBucket: "im-tutorial-bbb9b.appspot.com",
  messagingSenderId: "983991027486",
  appId: "1:983991027486:web:6a40d6cf05b7d71a532b0f",
  measurementId: "G-17F5XG7NLK"
})

ReactDOM.render(<div>Hello World</div>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
