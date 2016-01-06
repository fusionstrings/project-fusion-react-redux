import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app.js';
import Test from './containers/test.js';

export default (
  <Route path="/" component={App}>
    <Route path="/:test" component={Test} />
  </Route>
)
