import React from "react";

import {BrowserRouter, Switch, Route} from "react-router-dom";

import {Navigation} from './components/Navigation'

import {HomePage} from './pages/Home'
import {ListPage} from './pages/List'
import {DonePage} from './pages/Done'


export const AppRoute = () => {
  return (
    <BrowserRouter>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/list">
            <ListPage />
          </Route>

          <Route path="/done">
            <DonePage />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}