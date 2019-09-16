
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.js';
import './styles/stylesheet.css';
import { BrowserRouter } from 'react-router-dom';

// BrowserRouter makes sure our app is aware of the URLs being hit
ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
