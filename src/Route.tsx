import React from "react";

import {BrowserRouter, Switch, Route} from "react-router-dom";

import {Navigation} from './components/Navigation'

import {CreateTodo} from './pages/CreateTodo'
import {Home} from './pages/Home'
import {DonePage} from './pages/Done'


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
            <DonePage />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}