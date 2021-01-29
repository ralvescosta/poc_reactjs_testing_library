import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navigation } from './components/Navigation'

import { SearchRepository } from './pages/SearchRepository'

export const AppRoute = () => {
  return (
    <BrowserRouter>
        <Navigation />

        <Switch>

          <Route path="/">
            <SearchRepository />
          </Route>

        </Switch>
    </BrowserRouter>
  )
}
