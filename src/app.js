console.log('Hi! I am running!');

import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/appRouter';

ReactDOM.render(<AppRouter />, document.getElementById('app'));