import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';
import HeaderContainer from '../containers/HeaderContainer';
import SingleFilmContainer from '../containers/SingleFilmContainer';
import GenreContainer from '../containers/GenreContainer';
import SearchContainer from '../containers/SearchContainer';

const routes = (
  <BrowserRouter>
    <div>
      <Route to="/" component={HeaderContainer} />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/film/:id" component={SingleFilmContainer} />
        <Route path="/genre/:genre" component={GenreContainer} />
        <Route path="/search/q=:search" component={SearchContainer} />
        <Route
          render={() => <h1 className="pageNotFound">Sorry, page not found</h1>}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default routes;
