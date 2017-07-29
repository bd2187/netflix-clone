import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Header from '../components/Header/Header';
import SingleFilmContainer from '../containers/SingleFilmContainer';

const routes = (
  <BrowserRouter>
    <div>
      <Route to="/" component={Header} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/film/:id" component={SingleFilmContainer} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default routes;
