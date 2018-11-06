import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 200000, createdAt: 150 }));
// store.dispatch(addExpense({ description: 'Electricity Bill', amount: 10000, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 20000, createdAt: 1500 }));
// store.dispatch(setTextFilter('Rent'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

import AppRouter, { history } from './routers/appRouter';

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid));
    console.log('Logged In!');
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    console.log('Not Logged In');
    renderApp()
    history.push('/');
  }
})