import React from 'react';
import {
  BrowserRouter, Route, Switch, NavLink, Link
} from 'react-router-dom';

import ExpenseDashboardPage from "../components/ExpenseDashboardPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      {/* <Header /> */}
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;