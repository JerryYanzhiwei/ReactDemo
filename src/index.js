import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Life from './demo/Lift'
// import Admin from './admin'
// import Home from './page/route-dom/route1/home'
// import Router from './page/route-dom/route2/router'
import Router from './router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
