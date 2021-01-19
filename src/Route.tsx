import React from "react";

import {BrowserRouter, Switch, Route} from "react-router-dom";

import {Navigation} from './components/Navigation'

import {HomePage} from './pages/Home'

export const AppRoute = () => {
  return (
    <BrowserRouter>
        <Navigation />

        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}