import React from 'react';
import {
  Router, Route, Switch, NavLink, Link
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from "../components/LoginPage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpenseForm from "../components/AddExpenseForm";
import EditExpenseForm from "../components/EditExpenseForm";

import PrivateRoute from './privateRoutes';
import PublicRoute from './publicRoutes';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true} />
        <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
        <PrivateRoute path='/create' component={AddExpenseForm} />
        <PrivateRoute path='/edit/:id' component={EditExpenseForm} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;