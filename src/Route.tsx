import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navigation } from './components/Navigation'

import { SearchRepository } from './pages/SearchRepository'
import { RepositoriesLiked } from './pages/RepositoriesLiked'

export const AppRoute = () => {
  return (
    <BrowserRouter>
        <Navigation />

        <Switch>

          <Route path="/" exact>
            <RepositoriesLiked />
          </Route>

          <Route path="/search">
            <SearchRepository />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}
