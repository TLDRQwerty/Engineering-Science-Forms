import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './style.css';

const element = document.querySelector('#react-root');

if (!element) throw Error('Failed to find element');

ReactDOM.render(<App />, element);
