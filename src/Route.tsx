import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navigation } from './components/Navigation'

import { CreateTodo } from './pages/CreateTodo'
import { Home } from './pages/Home'
import { Done } from './pages/Done'

export const AppRoute = () => {
  return (
    <BrowserRouter>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/create">
            <CreateTodo />
          </Route>

          <Route path="/done">
            <Done />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}
