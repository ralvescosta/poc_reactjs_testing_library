import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navigation } from './components/Navigation'

import { CreateTodoView } from './pages/CreateTodo'
import { HomeView } from './pages/Home'
import { DoneView } from './pages/Done'

export const AppRoute = () => {
  return (
    <BrowserRouter>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/create">
            <CreateTodoView />
          </Route>

          <Route path="/done">
            <DoneView />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}
