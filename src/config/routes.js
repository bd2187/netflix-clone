import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Header from '../components/Header';

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default routes;
