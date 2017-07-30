import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import HeaderContainer from '../containers/HeaderContainer';
import SingleFilmContainer from '../containers/SingleFilmContainer';
import GenreContainer from '../containers/GenreContainer';

const routes = (
  <BrowserRouter>
    <div>
      <Route to="/" component={HeaderContainer} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/film/:id" component={SingleFilmContainer} />
        <Route path="/genre/:genre" component={GenreContainer}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default routes;
