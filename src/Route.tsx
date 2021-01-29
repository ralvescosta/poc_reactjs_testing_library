import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navigation } from './components/Navigation'

import { CreateTodo } from './pages/CreateTodo'

export const AppRoute = () => {
  return (
    <BrowserRouter>
        <Navigation />

        <Switch>

          <Route path="/create">
            <CreateTodo />
          </Route>

        </Switch>
    </BrowserRouter>
  )
}
