// React imports
import React from 'react';
import { render } from 'react-dom';
//import {syncReduxAndRouter} from 'redux-simple-router';
// app specific imports
import history from './services/history.js';
import routes from './routes/routes.js';
import Root from './containers/root.js';
import configureStore from './store/configure-store-dev.js';
debugger
const store = configureStore();
//syncReduxAndRouter(history, store);

requestAnimationFrame(() =>
  render(
    <Root
      store={store}
      history={history}
      routes={routes} />,
    document.getElementById('root')
  )
)