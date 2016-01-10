import React from 'react'
import { Route } from 'react-router'
import App from './../containers/App.js'
import UserPage from './../containers/UserPage.js'
import RepoPage from './../containers/RepoPage.js'

export default (
  <Route path="/" component={App}>
  <Route path="/:login"
         component={UserPage} />
    <Route path="/:login/:name"
           component={RepoPage} />
  </Route>
)
