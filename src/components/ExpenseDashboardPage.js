import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseListFilter';
import ExpenseSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpenseFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;