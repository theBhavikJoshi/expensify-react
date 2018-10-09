import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseListFilter';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;