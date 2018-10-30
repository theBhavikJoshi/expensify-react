import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 200000, createdAt: 150 }));
store.dispatch(addExpense({ description: 'Electricity Bill', amount: 10000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 20000, createdAt: 1500 }));
// store.dispatch(setTextFilter('Rent'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

import AppRouter from './routers/appRouter';

ReactDOM.render(jsx, document.getElementById('app'));