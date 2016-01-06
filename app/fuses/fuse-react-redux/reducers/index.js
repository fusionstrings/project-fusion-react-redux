import { combineReducers } from 'redux';
import merge from 'lodash/object/merge.js';
import * as actions from './../actions/index.js';

function entities(state = { users: {}, repos: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

const rootReducer = combineReducers({
  entities,
  pagination,
  errorMessage,
  router
})

export default rootReducer;