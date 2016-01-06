import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import saga from 'redux-saga';
import DevTools from './../containers/dev-tools.js';
import rootReducer from './../reducers/index.js';
import rootSaga from './../sagas/index.js';
import {DEBUG} from './../../../settings/config.js';


const finalCreateStore = compose(
  applyMiddleware(saga(rootSaga), createLogger()),
  DevTools.instrument()
)(createStore)

export default function configureStore(initialState, DEBUG = false) {
  const store = finalCreateStore(rootReducer, initialState)

  if (DEBUG) {
    console.log('Debug is true');
  }

  return store
}
