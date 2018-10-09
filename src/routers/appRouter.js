import React from 'react';
import {
  BrowserRouter, Route, Switch, NavLink, Link
} from 'react-router-dom';

import Header from "../components/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpenseForm from "../components/AddExpenseForm";
import EditExpenseForm from "../components/EditExpenseForm";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true} />
        <Route path='/create' component={AddExpenseForm} />
        <Route path='/edit/:id' component={EditExpenseForm} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;