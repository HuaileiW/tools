/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from 'utils/routes.json';
import Home from 'containers/Home';

export default () => (
  <Switch>
    <Route path={routes.HOME} component={Home} />
  </Switch>
);
