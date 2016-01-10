import { combineReducers } from 'redux';
import merge from 'lodash/object/merge.js';
import paginate from './paginate.js'
import * as actions from './../actions/index.js';

// Updates an entity cache in response to any action with response.entities.
function entities(state = { users: {}, repos: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === actions.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
  starredByUser: paginate({
    mapActionToKey: action => action.login,
    types: [
      actions.STARRED.REQUEST,
      actions.STARRED.SUCCESS,
      actions.STARRED.FAILURE
    ]
  }),
  stargazersByRepo: paginate({
    mapActionToKey: action => action.fullName,
    types: [
      actions.STARGAZERS.REQUEST,
      actions.STARGAZERS.SUCCESS,
      actions.STARGAZERS.FAILURE
    ]
  })
})

function router(state = { pathname: '/' }, action) {
  switch (action.type) {
    case actions.UPDATE_ROUTER_STATE:
      return action.state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  entities,
  pagination,
  errorMessage,
  router
})

export default rootReducer
