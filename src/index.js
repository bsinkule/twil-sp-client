import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth from "./Auth";
import { BrowserRouter } from 'react-router-dom';

const auth = new Auth();

let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes)
    ReactDOM.render(<BrowserRouter><App path='/' {...state}/></BrowserRouter>, document.getElementById('root'));
}

/* eslint no-restricted-globals: 0*/
let initialState = {
    name: 'Brice',
    location: location.pathname.replace(/^\/?|\/$/g, ""),
    auth
}

window.setState(initialState)